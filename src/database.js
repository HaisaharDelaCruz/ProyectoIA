//conexion a BD
const mongoose = require('mongoose'); //Conexion A MongoDB Atlas
const usuario = 'root';
const password = 'gsgwBBvs5P8Mu0Pj';
const dbname = 'usuarios'
const uri = `mongodb+srv://${usuario}:${password}@cluster0.gwxd1.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))
