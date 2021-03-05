require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Servir contenido estático
app.use(express.static('public'));

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {
   console.log('error de partials'); 
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andres Galindo',
        titulo: 'Curso de Node Express'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Andres Galindo',
        titulo: 'Curso de Node Express'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Andres Galindo',
        titulo: 'Curso de Node Express'
    });
});

app.get('*', (req, res) => {
    res.sendfile('./public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening a http://localhost:${port}`);
});

