var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
// aquí se settea el puerto para escuchar el servidor

// definiremos la primera ruta del servidor la raíz
app.get("/", function (req, res) {
  res.send("<html><head><body><h1>Hello world!</h1></body></head></html>");
});

app.listen(port); // levantamiento del servidor
