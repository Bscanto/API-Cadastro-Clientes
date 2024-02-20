const Sequelize = require('sequelize');// importando sequelize

//conectando ao banco de dados
const connection = new Sequelize('banco-de-dados','usuario','senha',{// nome, usuario, senha do banco de dados 
    host: '127.0.0.1',//servidor onde esta rodando a aplicação
    dialect: 'mysql',
    port: 3306//tipo de banco que estou conectando no sequelize
    
});

module.exports = connection;// exportando a conecção do banco de dados 