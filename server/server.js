const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, "../public");

enableLiveReload(app);

setupMiddlewares(app);

serveStaticFiles(app);

startServer(app, PORT);

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
    "connect-src 'self' ws://localhost:35729",
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
 * Inicia el servidor Express en el puerto especificado.
 */
function startServer(app, port) {
  app.listen(port, () => {
    console.log(`Servidor corriendo en: http://localhost:${port}`);
  });
}
