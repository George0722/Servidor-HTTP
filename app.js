//Conexão com BD MySQL
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Cashback7$',
    database : 'celke'
  });

connection.connect(function(err){
  if(err) console.error('Erro ao realizar a conexão com o Banco de Dados: ' + err.stack)
  return    
  })

  connection.query('insert into users(nome, email) values("Jéssica", "jessica@celke.com.br")', function(err, result){
    if(!err){
      console.log('Usuário cadastrado com sucesso!')
    } else{
      console.log('Erro ao cadastrar o usuário!')
    }
  })













