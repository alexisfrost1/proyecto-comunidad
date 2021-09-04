const express = require('express');
const router = express.Router();
const usersModel = require('../models/users.model');

/**
 * @swagger
 * /users/:
 *  get:
 *    tags:
 *    - name: users
 *    description: Get all users
 *    responses:
 *      '200':
 *        description: Returns a list containing all users.
 */
router.get('/', /* verifyRole.admin, */ (req, res) => {
  usersModel.getUsers()
    .then(users => {
      users.forEach(user => {
        delete user['password']
      });
      res.status(200).json({
        success: true,
        message: 'all users.',
        users
      });
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: err.message
      });
    });
});

/**
 * @swagger
 * /users/new:
 *  post:
 *    tags:
 *    - name: users
 *    description: Create a new user
 *    parameters:
 *      - in: body
 *        description: The user to create
 *        schema:
 *          type: object
 *          required: 
 *            - firstname
 *            - lastname
 *            - password
 *            - email
 *            - role
 *          properties:
 *            firstname:
 *              type: string
 *              example: John
 *            lastname:
 *              type: string
 *              example: Doe
 *            password:
 *              type: string
 *              example: $%&SDF$SD_F-Gs+ad*f45
 *            email:
 *              type: string
 *              example: j.doe@example.com
 *            role: 
 *              type: string
 *              example: companion
 *              enum:
 *                - elder
 *                - companion
 *                - server
 *    responses:
 *      '200':
 *        description: Returns the new user.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolen
 *              example: true
 *            message:
 *              type: string
 *              example: User created successfully.
 *            userData:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 1
 *                firstname:
 *                  type: string
 *                  example: John
 *                lastname:
 *                  type: string
 *                  example: Doe
 *                email:
 *                  type: string
 *                  example: j.doe@example.com
 *                wallet:
 *                  type: integer
 *                  example: null
 *      '401':
 *        description: Error. Unauthorized action.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              example: false
 *            message:
 *              type: string
 *              example: Error. Unauthorized action. 
 */
router.post('/newPersona',/*  verifyRole.admin, */ async (req, res) => {
  const {
      Rut,
      Nombres,
      Apellidos,
      Fecha_nac,
      Direccion,
      Email,
      Fono
  } = req.body;
  const persona = {
      Rut,
      Nombres,
      Apellidos,
      Fecha_nac,
      Direccion,
      Email,
      Fono
   }

  console.log('Creando nueva persona');

  usersModel.createPersona(persona)
    .then(newUser => {
      console.log({
        newUser: newUser.code
      })

      // check if the user exist on the db
      if (newUser.code == 'ER_DUP_ENTRY') {
        console.log(newUser)
        res.status(500).json({
          success: false,
          message: newUser.sqlMessage
        });
      } else {

        // if the user is not on the db we create it
        res.status(200).json({
          success: true,
          message: 'User created successfully.',
          newUser: user
        });
      }

    })
    .catch(err => {
      res.status(500).json({
        success: false,
        message: err.sqlMessage
      });
    });
});

/**
 * @swagger
 * /users/new:
 *  post:
 *    tags:
 *    - name: users
 *    description: Create a new user
 *    parameters:
 *      - in: body
 *        description: The user to create
 *        schema:
 *          type: object
 *          required:
 *            - firstname
 *            - lastname
 *            - password
 *            - email
 *            - role
 *          properties:
 *            firstname:
 *              type: string
 *              example: John
 *            lastname:
 *              type: string
 *              example: Doe
 *            password:
 *              type: string
 *              example: $%&SDF$SD_F-Gs+ad*f45
 *            email:
 *              type: string
 *              example: j.doe@example.com
 *            role:
 *              type: string
 *              example: companion
 *              enum:
 *                - elder
 *                - companion
 *                - server
 *    responses:
 *      '200':
 *        description: Returns the new user.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolen
 *              example: true
 *            message:
 *              type: string
 *              example: User created successfully.
 *            userData:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 1
 *                firstname:
 *                  type: string
 *                  example: John
 *                lastname:
 *                  type: string
 *                  example: Doe
 *                email:
 *                  type: string
 *                  example: j.doe@example.com
 *                wallet:
 *                  type: integer
 *                  example: null
 *      '401':
 *        description: Error. Unauthorized action.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              example: false
 *            message:
 *              type: string
 *              example: Error. Unauthorized action.
 */
router.post('/newAdmin',/*  verifyRole.admin, */ async (req, res) => {
    const {
        Rut,
        password
    } = req.body
    const user = {
        Rut,
        password,
        state: 'active'
    }

    console.log('Creando nuevo admin');
    user.password = await helpers.encyptPassword(user.password);

    usersModel.createAdmin(user)
        .then(newUser => {
            console.log({
                newUser: newUser.code
            })

            // check if the user exist on the db
            if (newUser.code == 'ER_DUP_ENTRY') {
                console.log(newUser)
                res.status(500).json({
                    success: false,
                    message: newUser.sqlMessage
                });
            } else {

                // if the user is not on the db we create it
                delete user['password'];
                res.status(200).json({
                    success: true,
                    message: 'User created successfully.',
                    newUser: user
                });
            }

        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.sqlMessage
            });
        });
});

/**
 * @swagger
 * /users/new:
 *  post:
 *    tags:
 *    - name: users
 *    description: Create a new user
 *    parameters:
 *      - in: body
 *        description: The user to create
 *        schema:
 *          type: object
 *          required:
 *            - firstname
 *            - lastname
 *            - password
 *            - email
 *            - role
 *          properties:
 *            firstname:
 *              type: string
 *              example: John
 *            lastname:
 *              type: string
 *              example: Doe
 *            password:
 *              type: string
 *              example: $%&SDF$SD_F-Gs+ad*f45
 *            email:
 *              type: string
 *              example: j.doe@example.com
 *            role:
 *              type: string
 *              example: companion
 *              enum:
 *                - elder
 *                - companion
 *                - server
 *    responses:
 *      '200':
 *        description: Returns the new user.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolen
 *              example: true
 *            message:
 *              type: string
 *              example: User created successfully.
 *            userData:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 1
 *                firstname:
 *                  type: string
 *                  example: John
 *                lastname:
 *                  type: string
 *                  example: Doe
 *                email:
 *                  type: string
 *                  example: j.doe@example.com
 *                wallet:
 *                  type: integer
 *                  example: null
 *      '401':
 *        description: Error. Unauthorized action.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              example: false
 *            message:
 *              type: string
 *              example: Error. Unauthorized action.
 */
router.post('/newConserje',/*  verifyRole.admin, */ async (req, res) => {
    const {
        Rut,
        password
    } = req.body
    const user = {
        Rut,
        password,
        state: 'active'
    }

    console.log('Creando nuevo conserje');
    user.password = await helpers.encyptPassword(user.password);

    usersModel.createConserje(user)
        .then(newUser => {
            console.log({
                newUser: newUser.code
            })

            // check if the user exist on the db
            if (newUser.code == 'ER_DUP_ENTRY') {
                console.log(newUser)
                res.status(500).json({
                    success: false,
                    message: newUser.sqlMessage
                });
            } else {

                // if the user is not on the db we create it
                delete user['password'];
                res.status(200).json({
                    success: true,
                    message: 'User created successfully.',
                    newUser: user
                });
            }

        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.sqlMessage
            });
        });
});

/**
 * @swagger
 * /users/new:
 *  post:
 *    tags:
 *    - name: users
 *    description: Create a new user
 *    parameters:
 *      - in: body
 *        description: The user to create
 *        schema:
 *          type: object
 *          required:
 *            - firstname
 *            - lastname
 *            - password
 *            - email
 *            - role
 *          properties:
 *            firstname:
 *              type: string
 *              example: John
 *            lastname:
 *              type: string
 *              example: Doe
 *            password:
 *              type: string
 *              example: $%&SDF$SD_F-Gs+ad*f45
 *            email:
 *              type: string
 *              example: j.doe@example.com
 *            role:
 *              type: string
 *              example: companion
 *              enum:
 *                - elder
 *                - companion
 *                - server
 *    responses:
 *      '200':
 *        description: Returns the new user.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolen
 *              example: true
 *            message:
 *              type: string
 *              example: User created successfully.
 *            userData:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 1
 *                firstname:
 *                  type: string
 *                  example: John
 *                lastname:
 *                  type: string
 *                  example: Doe
 *                email:
 *                  type: string
 *                  example: j.doe@example.com
 *                wallet:
 *                  type: integer
 *                  example: null
 *      '401':
 *        description: Error. Unauthorized action.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              example: false
 *            message:
 *              type: string
 *              example: Error. Unauthorized action.
 */
router.post('/newPropietario',/*  verifyRole.admin, */ async (req, res) => {
    const {
        Rut,
        password
    } = req.body
    const user = {
        Rut,
        password,
        state: 'active'
    }

    console.log('Creando nuevo propietario');
    user.password = await helpers.encyptPassword(user.password);

    usersModel.createPropietario(user)
        .then(newUser => {
            console.log({
                newUser: newUser.code
            })

            // check if the user exist on the db
            if (newUser.code == 'ER_DUP_ENTRY') {
                console.log(newUser)
                res.status(500).json({
                    success: false,
                    message: newUser.sqlMessage
                });
            } else {

                // if the user is not on the db we create it
                delete user['password'];
                res.status(200).json({
                    success: true,
                    message: 'User created successfully.',
                    newUser: user
                });
            }

        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.sqlMessage
            });
        });
});

/**
 * @swagger
 * /users/new:
 *  post:
 *    tags:
 *    - name: users
 *    description: Create a new user
 *    parameters:
 *      - in: body
 *        description: The user to create
 *        schema:
 *          type: object
 *          required:
 *            - firstname
 *            - lastname
 *            - password
 *            - email
 *            - role
 *          properties:
 *            firstname:
 *              type: string
 *              example: John
 *            lastname:
 *              type: string
 *              example: Doe
 *            password:
 *              type: string
 *              example: $%&SDF$SD_F-Gs+ad*f45
 *            email:
 *              type: string
 *              example: j.doe@example.com
 *            role:
 *              type: string
 *              example: companion
 *              enum:
 *                - elder
 *                - companion
 *                - server
 *    responses:
 *      '200':
 *        description: Returns the new user.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolen
 *              example: true
 *            message:
 *              type: string
 *              example: User created successfully.
 *            userData:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                  example: 1
 *                firstname:
 *                  type: string
 *                  example: John
 *                lastname:
 *                  type: string
 *                  example: Doe
 *                email:
 *                  type: string
 *                  example: j.doe@example.com
 *                wallet:
 *                  type: integer
 *                  example: null
 *      '401':
 *        description: Error. Unauthorized action.
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *              example: false
 *            message:
 *              type: string
 *              example: Error. Unauthorized action.
 */
router.post('/newCoPropietario',/*  verifyRole.admin, */ async (req, res) => {
    const {
        Rut,
        password
    } = req.body
    const user = {
        Rut,
        password,
        state: 'active'
    }

    console.log('Creando nuevo copropietario');
    user.password = await helpers.encyptPassword(user.password);

    usersModel.createCoPropietario(user)
        .then(newUser => {
            console.log({
                newUser: newUser.code
            })

            // check if the user exist on the db
            if (newUser.code == 'ER_DUP_ENTRY') {
                console.log(newUser)
                res.status(500).json({
                    success: false,
                    message: newUser.sqlMessage
                });
            } else {

                // if the user is not on the db we create it
                delete user['password'];
                res.status(200).json({
                    success: true,
                    message: 'User created successfully.',
                    newUser: user
                });
            }

        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.sqlMessage
            });
        });
});

module.exports = router;