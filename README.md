<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>

<h1>README.md</h1>

<h2>Plataforma Web</h2>

<p>Este projeto foi desenvolvido como parte da avaliação final da disciplina de Desenvolvimento Web. Ele consiste em uma aplicação que gerencia usuários, oferecendo funcionalidades como registro, login, atualização e exclusão de dados. O backend é construído usando Node.js, Express e MongoDB, enquanto o frontend utiliza HTML, Bootstrap e JavaScript com a biblioteca Axios para comunicação com o servidor.</p>

<h3>Backend</h3>

<h4>Tecnologias Utilizadas</h4>
<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>MongoDB</li>
    <li>Bcrypt</li>
    <li>Cors</li>
</ul>

<h4>Configurando o Backend</h4>

<ol>
    <li>Instale o Node.js e o npm se ainda não estiverem instalados.</li>
    <li>Clone o repositório:
        <pre><code>git clone https://github.com/danielNunesRo/git@github.com:danielNunesRo/plataformaweb.git</pre>
    </li>
    <li>Instale as dependências:
        <pre><code>cd plataformaweb/src
npm install</code></pre></li>
    <li>Configure o MongoDB:
        <ul>
            <li>Crie uma conta no MongoDB Atlas: <a href="https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a></li>
            <li>Crie um cluster e obtenha a string de conexão.</li>
            <li>Substitua a string de conexão na função <code>mongoose.connect</code> no arquivo <code>index.js</code> pela sua própria.</li>
        </ul>
    </li>
    <li>Inicie o servidor backend:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<h4>Pontos de Extensão da API</h4>

<ul>
    <li><strong>GET /:</strong>
        <ul>
            <li>Recupera todos os usuários registrados.</li>
            <li>Exemplo: <code>http://localhost:3600/</code></li>
        </ul>
    </li>

    <li><strong>POST /register:</strong>
        <ul>
            <li>Registra um novo usuário.</li>
            <li>Exemplo: <code>http://localhost:3600/register</code>
                <ul>
                    <li>Corpo da Requisição:
                        <pre><code>{
  "name": "Nome do Usuário",
  "email": "usuario@example.com",
  "password": "senhadousuario"
}</code></pre>
                    </li>
                </ul>
            </li>
        </ul>
    </li>

    <!-- Adicione outros pontos de extensão conforme necessário -->

</ul>

<h3>Frontend</h3>

<h4>Tecnologias Utilizadas</h4>
<ul>
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>JavaScript</li>
    <li>Axios</li>
</ul>

<h4>Configurando o Frontend</h4>

<ol>
    <li>Abra os arquivos frontend em um editor de código.</li>
    <li>Substitua as URLs fictícias nos arquivos HTML (por exemplo, <code>&lt;form action="http://localhost:3600/register" method="post"&gt;</code>) pelas URLs reais onde seu backend está hospedado.</li>
    <li>Abra os arquivos HTML em um navegador da web ou hospede-os usando um servidor.</li>
</ol>

<h3>Observações</h3>

<ul>
    <li>Certifique-se de manter segura a string de conexão do MongoDB e outras informações sensíveis.</li>
    <li>Personalize o frontend conforme necessário e garanta que as URLs correspondam ao seu servidor backend.</li>
</ul>

<p>Sinta-se à vontade para aprimorar e personalizar este README de acordo com as necessidades do seu projeto!</p>

</body>
</html>
