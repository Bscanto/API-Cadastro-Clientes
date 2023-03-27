const sequelize = require("sequelize");
const connection = require("./database");
// Criação das tabelas no banco de dados

const Cadastro = connection.define('cadastro',{
  nome:{
    type: sequelize.STRING,
    allowNull:true
  },
  sexo:{
    type: sequelize.STRING,
    allowNull:true
  },
  nascimento:{
    type: sequelize.DATE,
    allowNull:true
  },
  idade:{
    type:sequelize.INTEGER,
    allowNull:true
  },
  cidade:{
    type: sequelize.STRING,
    allowNull:true
  },
  estado:{
    type: sequelize.STRING,
    allowNull:true
  }
});                                                                     
Cadastro.sync({force: false}).then(() => {});


module.exports = Cadastro;