const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Bufou no container</h1>')
})

app.listen(port, () => {
  console.log('rodando na porta ' + port)
})
