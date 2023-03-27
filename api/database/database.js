const Sequelize = require('sequelize');// importando sequelize

//conectando ao banco de dados
const connection = new Sequelize('api','root','********',{// nome, usuario, senha do banco de dados 
    host: 'localhost',//servidor onde esta rodando a aplicação
    dialect: 'mysql'//tipo de banco que estou conectando no sequelize
});

module.exports = connection;// exportando a conecção do banco de dados 