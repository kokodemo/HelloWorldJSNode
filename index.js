const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
 })

app.get('/adeu', (req, res) => {
  res.send('<form method="POST" action=""> <input type="submit"></form> ')
 })

app.post('/adeu', (req, res) => {
  res.send('Post Hell!')
 })

app.listen(4000, () => console.log('Example app listening on port 4000!'));