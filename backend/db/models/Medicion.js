var sequelize = require('../conecction.js');
const Sequelize = require('sequelize');
const Medicion = sequelize.define('medicion', {
  id: {
    type: Sequelize.INTEGER,
    field: 'id',
    autoIncrement:true,
    primaryKey:true
  },
  numero: {
      field: 'numero',
      type: Sequelize.INTEGER
    },
  descripcion: {
      field: 'descripcion',
      type: Sequelize.TEXT
    },
  fecha_hora: {
      field: 'fecha_hora',
      type: Sequelize.INTEGER
  }},
  {
  timestamps:false,
  freezeTableName: true,
  tableName:'medicion'
}
);
const unaMedicion = Medicion.build({numero:300,descripcion:'asda',fecha_hora:13});
unaMedicion.save();
// force: true will drop the table if it already exists
