const express = require("express");
const path = require("path");
const http = require("http"); // Necesario para socket.io
const socketIO = require("socket.io"); // Importar socket.io
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, "../public");

const server = http.createServer(app);

setupSockets(server);

enableLiveReload(app);

setupMiddlewares(app);

serveStaticFiles(app);

startServer(server, PORT);

/**
 * Habilita LiveReload para recargar automaticamente los cambios en el frontend.
 */
function enableLiveReload(app) {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(PUBLIC_PATH);
  app.use(connectLivereload());
}

/**
 * Configura las politicas de seguridad (CSP) para permitir LiveReload y Bootstrap CDN.
 */
function setupMiddlewares(app) {
  app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", generateCSP());
    next();
  });
}

/**
 * Devuelve la configuracion de Content Security Policy (CSP).
 */
function generateCSP() {
  return [
    "default-src 'self' http://localhost:35729",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:35729",
    "style-src 'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com",
    "connect-src 'self' ws://localhost:35729 ws://localhost:3000",
    "img-src 'self' data:",
    "font-src 'self' data:",
  ].join("; ");
}

/**
 * Configura la ruta de archivos estaticos para el servidor Express.
 */
function serveStaticFiles(app) {
  app.use(express.static(PUBLIC_PATH));
}

/**
 * Configura la logica de WebSockets con socket.io.
 */
function setupSockets(server) {
  module.exports.io = socketIO(server);
  require("./sockets/socket");
}

/**
 * Inicia el servidor en el puerto especificado.
 */
function startServer(server, port) {
  server.listen(port, () => {
    console.log(`Servidor corriendo en: http://localhost:${port}`);
  });
}
