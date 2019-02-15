const express = require('express');
const app = express(); //funcion express
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'amanda'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

//app.get('/', (req, res) => { //solicitud get
// res.send('Hola Mandy')

//  let salida = {
//      nombre: 'Amanda',
//      edad: 20,
//      url: req.url
//  };

//  res.send(salida);

//});





app.listen(port, () => {
    console.log(`Escuchando peticiones puerto ${port}`);
})