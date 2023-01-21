const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');

var pessoas = [
  {
      'nome': 'Paulo',
      'idade': 12
  },
  {
      'nome': 'Jõao',
      'idade': 15,
  },
  {
      'nome': 'Marina',
      'idade': 25,
  },
]


app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
