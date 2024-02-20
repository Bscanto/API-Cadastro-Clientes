const express = require("express"); //importando o modulo express
const app = express(); //criando uma instancia do exprees para variavem appconst sequelize = require("sequelize");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Cadastro = require("./database/Cadastro"); // importando o model da tabela




// Dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Body parser
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
})); // Decodifica os dados enviados pelo formulario
app.use(bodyParser.json()); // permite a leitura de dados via json

//Database mysql workbanch conexão
connection.authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!")
}).catch((msgErro) => {
    console.log(msgErro);
});

//rotas

// rota para pagina principal
app.get("/", (req, res) => {
    Cadastro.findAll({raw: true}).then(cadastros => {
        res.render("principal", {
            cadastros: cadastros
        }); 
    });

});

// rota para pagina cadastrar cliente
app.get("/cadastrar", (req, res) => {
    res.render("cadastrar");
});

//rota para salvar cadastro banco de dados 
app.post("/salvarcadastro", (req, res) => {
    var nome = req.body.nome;
    var sexo = req.body.sexo;
    var datanascimento = req.body.datanascimento;
    var idade = req.body.idade;
    var cidade = req.body.cidade;
    var estado = req.body.estado;

    //Validações
    if (!nome || !sexo || !datanascimento || !idade || !cidade || !estado) {
      return res.status(400).send('Todos os campos são obrigatórios');
  }

  if (isNaN(idade)) {
      return res.status(400).send('A idade deve ser um número');
  }
    Cadastro.create({
        nome: nome,
        sexo: sexo,
        nascimento: datanascimento,
        idade: idade,
        cidade: cidade,
        estado: estado
    }).then(() => {
        res.redirect("/");
    });
});

// Rota para a página de edição de cadastro
app.get("/editar/:id", (req, res) => {
  console.log(`edit id ${req.params.id}`);
    Cadastro.findOne({ where: { id: req.params.id } })
      .then((cadastro) => {
        if (!cadastro) {
          return res.status(404).send('Cadastro não encontrado');
      }
        res.render("editar", {cadastro: cadastro });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Ocorreu um erro ao buscar o cadastro');
      });
  });

// Rota para salvar as alterações no cadastro
app.post("/atualizarcadastro/:id", (req, res) => {
  Cadastro.findOne({ where: { id: req.params.id } })
  .then((cadastro) => {
      if (!cadastro) {
          return res.status(404).send('Cadastro não encontrado');
      }
      
      const data = { 
        nome: req.body.nome,
        sexo: req.body.sexo,
        datanascimento: req.body.datanascimento,
        idade: req.body.idade,
        cidade: req.body.cidade,
        estado: req.body.estado
      }
      console.log(`data ${JSON.stringify(data)}`);

      cadastro.update(data).then(() => {
        console.log(`them id`)
        res.redirect('/');
      })
    });
});

  // rota para excluir
  app.post("/excluir/:id", (req, res) => {
    Cadastro.findOne({ where: { id: req.params.id } })
    .then((cadastro) => {
        if (!cadastro) {
            return res.status(404).send('Cadastro não encontrado');
        }

        Cadastro.destroy({
            where: { id: req.params.id }
        })
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Ocorreu um erro ao excluir o cadastro');
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('Ocorreu um erro ao buscar o cadastro');
    });
});

// Rotas para pesquisas
app.get('/pesquisar', async (req, res) => {
  const tipo = req.query.tipo;
  const valor = req.query.valor;

  try {
    let resultado;

    if (tipo === 'cidade_nome') {
      resultado = await Cadastro.findAll({ where: { cidade: valor } });
    } else if (tipo === 'cidade_estado') {
      resultado = await Cadastro.findAll({ where: { estado: valor } });
    } else if (tipo === 'cliente_nome') {
      resultado = await Cadastro.findAll({ where: { nome: valor } });
    } else if (tipo === 'cliente_id') {
      resultado = await Cadastro.findByPk(valor);
    }
    res.render('resultados', { resultado });
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro na pesquisa.');
  }
});

app.listen(8081, () => {
    console.log("App rodando!");
});