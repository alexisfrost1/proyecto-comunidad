const pool = require('../libs/database');

let authModel = {};

authModel.getAdminByRut = (Rut) => {
  return pool.query('SELECT * FROM Administrador WHERE Rut = ?', [Rut]);
}

authModel.getConserjeByRut = (Rut) => {
    return pool.query('SELECT * FROM Conserje WHERE Rut = ?', [Rut]);
}

authModel.getPropietarioByRut = (Rut) => {
    return pool.query('SELECT * FROM Propietario,CoPropietario WHERE Rut = ?', [Rut]);
}

module.exports = authModel;