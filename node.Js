
const http = require('http');
const chalk = require('chalk');


const host = 'localhost';
const puerto = 8000; // Puedes cambiar esto al puerto que desees, como 8080


const servidor = http.createServer((req, res) => {
  // Configurar la respuesta en formato JSON
  res.setHeader('Content-Type', 'application/json');
  
 
  const respuesta = {
    nombre: 'Tu Nombre',
    mensaje: 'Hola, este es mi servidor HTTP en Node.js'
  };
  
  // Enviar la respuesta como JSON
  res.end(JSON.stringify(respuesta));
});


servidor.listen(puerto, host, () => {
  const mensaje = `Servidor en funcionamiento en http://${host}:${puerto} Att: Jose Luis Rodriguez Garcia`;
  console.log(chalk.green(mensaje));
});