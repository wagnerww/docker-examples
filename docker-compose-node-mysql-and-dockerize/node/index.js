const express = require('express')
const mysql  = require('mysql')
const app = express()
const port = 3000

const configDB = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'app'
}

const connection = mysql.createConnection(configDB)

const sql = `INSERT INTO people(name) values('Wagner')`
connection.query(sql)
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>NODEJS RODANDO</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})