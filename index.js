const express = require('express')
const bodyParser =require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  let login="<!DOCTYPE html><html><head></head><body><form method='post' action='/'><label for='username'>Inserta un usuario</label><input type='text' name='username' id='username' ><br><input type='Submit'></form></body></html>";
  res.send(login);
});

app.post('/', (req, res) => {
  let user = req.body.username;
  let login= `<!doctype html><html><head></head><body>Hello, ${user} </body></html>`;
  res.send(login);
}); 

app.get('/', (req,res) => {
	res.send('<form method="post">\
		<input name="user">\
		<input type="submit" id="sub"/>\
		</form>')
})

app.post("/",function(req,res){
	var user=req.body.user;
	res.send("Hello "+user);
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})