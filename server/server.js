let express = require('express');
let bodyParser = require('body-parser');
let apiRouter = require('./apiRouter').router;

const port = 3000;

let server = express();

//CORS middleware
let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-xsrf-token, Authorization,X-Requested-With');
    next();
}
server.use(allowCrossDomain);

// Body Parser configuration
server.use(bodyParser.urlencoded({extended : true}));
server.use(bodyParser.json());

// routes configuration
server.get('/', function(req, res){
    res.setHeader('Content-type', 'text/html');
    res.status(200).send('<h1>Racine du serveur Exercice BaLink');
});

server.use('/api/', apiRouter);

server.listen(port, function(){
    console.log(`Démarrage du serveur sur le port ${port}`);
});