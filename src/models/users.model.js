const pool = require('../libs/database');
let usersModel = {};

usersModel.getUsers = () => {
  return pool.query('SELECT * FROM Conserje,Propietario,CoPropietario;');
}

usersModel.createPersona = (newUser) => {
    return pool.query('INSERT INTO Persona SET ?', [persona]);
}

usersModel.createAdmin = (newUser) => {
    return pool.query('INSERT INTO Administrador SET ?', [user]);
}

usersModel.createConserje = (newUser) => {
    return pool.query('INSERT INTO Conserje SET ?', [user]);
}

usersModel.createPropietario = (newUser) => {
    return pool.query('INSERT INTO Propietario SET ?', [user]);
}

usersModel.createCoPropietario = (newUser) => {
    return pool.query('INSERT INTO CoPropietario SET ?', [user]);
}

module.exports = usersModel;