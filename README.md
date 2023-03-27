# Criar uma API endpoint REST



Nesta estapa construi uma API para contemplar as seguintes operações expostas 
como endpoints REST:

* Cadastrar cidade
* Cadastrar cliente
* Consultar cidade pelo nome
* Consultar cidade pelo estado
* Consultar cliente pelo nome
* Consultar cliente pelo Id
* Remover cliente
* Alterar o nome do cliente


Este código é um exemplo de uma aplicação web em Node.js com Express, usando Sequelize para conexão com banco de dados MySQL.
O arquivo database.js cria uma conexão com o banco de dados usando as credenciais fornecidas e exporta a conexão para uso em outros arquivos da aplicação.
O arquivo index.js é o ponto de entrada da aplicação e contém as rotas para as diferentes páginas e ações. Ele usa o EJS como mecanismo de visualização e o Body Parser para analisar os dados enviados pelo formulário. Ele também usa o modelo Cadastro para interagir com a tabela de cadastro do banco de dados.

As rotas incluem:

* Uma rota para a página principal, que exibe todos os registros na tabela de cadastro.
* Uma rota para a página de cadastro de novo cliente, que exibe um formulário para adicionar um novo registro ao banco de dados.
* Uma rota para salvar o novo registro no banco de dados, após validar e sanitizar os dados enviados pelo formulário.
* Uma rota para a página de edição de cadastro, que exibe um formulário preenchido com os dados do registro selecionado para edição.
* Uma rota para salvar as alterações do registro editado no banco de dados, após validar e sanitizar os dados enviados pelo formulário.
* Uma rota para excluir um registro do banco de dados, após confirmar se o registro existe.
* Rotas para pesquisar registros na tabela de cadastro, com base no tipo de pesquisa selecionado e no valor de pesquisa inserido.

# Passo a passo para rodar a aplicação

Para executar esta aplicação, você precisará seguir os seguintes passos:


* Certifique-se de ter instalado o Node.js em sua máquina. Você pode baixá-lo e instalá-lo a partir do site oficial: [site para dowload node](https://nodejs.org/en/)
* Instalar Visual Studio Code [Dowload vscode](https://code.visualstudio.com/download);
* O mysql workbench [site para dowload mysql Workbench](https://dev.mysql.com/downloads/workbench/)
* O git instalado [site para dowload git](https://git-scm.com/download/win)



1. Crie uma pasta na sua area de trabalho e nomeie;
2. Dentro dessa pasta clique com o botão direito do mouse e abra o terminal do git  (Git bach here);
3. Abra código-fonte da aplicação a partir do repositório GitHub:
[Codigo do projeto para download](https://github.com/Bscanto/Api-Cadastro-Clientes.git);
4. Clique em code e copie a url do repositorio: ![]( )
5. No terminal do git digite:
```
git clone https://github.com/Bscanto/Api-Cadastro-Clientes.git
```

6. Abra o visual studio code, abra o terminal do vscode (ctrl '), navegue até a pasta raiz do projeto  e execute os comandos:

npm install para instalar as dependências do projeto:
```
npm init -y
```
```
npm install -g nodemon
```
```
npm install express --save
```
```
npm install ejs --save
```
```
npm install body-parser --save
```
```
npm install --save sequelize
```
```
npm install --save mysql2
```
7. Abra o mysql workbench, e crie o banco de dados  como no exemplo abaixo:
![Criar banco de dados](https://user-images.githubusercontent.com/75629284/228021101-37d3e7c4-0bcc-4872-9bd1-de4ffcfc4d08.mp4);

8. Na pasta database, arquivo database.js, trocar a senha do banco de dados para sua senha do mysql:
![dsBuffer bmp](https://user-images.githubusercontent.com/75629284/228030349-3a9cf148-3ea7-45ee-81dd-8039d574f919.png)

9. No terminal do visual studio code digite o seguinte comando:
```
npx nodemon index.js
```
10. Abra um navegador da web e acesse http://localhost:8080 para ver a aplicação em execução.
### Pronto Aplicação deve estar rodando !

>Com esses passos, você deve ser capaz de executar a aplicação localmente em sua máquina. Se você tiver problemas ao seguir esses passos, certifique-se de que todas as dependências foram instaladas corretamente e que todas as variáveis de ambiente foram definidas corretamente.

