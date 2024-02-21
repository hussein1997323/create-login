// // Importa o módulo MySQL
// //const mysql = require('mysql');

// // Configurações para conexão com o banco de dados
// const conexao = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'login'
// });

// // Estabelece a conexão
// conexao.connect((erro) => {
//     if (erro) {
//         console.error('Erro ao conectar ao banco de dados:', erro);
//         return;
//     }
//     console.log('Conexão bem-sucedida ao banco de dados MySQL');

//     // Executa uma consulta SQL
//     conexao.query('SELECT  * FROM usuario', (erro, resultados, campos) => {
//         if (erro) {
//             console.error('Erro ao executar a consulta:', erro);
//             return;
//         }
//         resultados.forEach(resultados => {
//             console.log('Email:',resultados.email)
//             console.log('senha:',resultados.senha)
            
//         });
//     });

//     // Fecha a conexão quando terminar de usar
//     conexao.end();
// });


// module.exports =conexao