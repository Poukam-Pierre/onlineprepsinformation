// Made by Poukam Pierre
// import mysql from 'mysql'
var mysql = require('mysql')

export var con = mysql.createConnection({
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5506944',
  password: 'bWd91s28V5',
  database: 'sql5506944',
})

// con.connect(function (err) {
//   if (err) throw err
//   alert('connected')
// })
