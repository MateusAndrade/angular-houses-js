const express = require('express');
const app = express();

//Seta a pasta estatica do aplicativo para o express
app.use(express.static(__dirname + '/dist'));

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

//Forca ao uso de SSL pelo express
app.use(forceSSL());

//redireciona todas as rotas para a index
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//seta a porta para o express
app.listen(process.env.PORT || 5000);
console.log("Servidor Iniciado...");
