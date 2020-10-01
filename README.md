# Notas:

Este es un pequeño servidor de express listo para ejecutarse y servir la carpeta public en la web.

Recuerden que deben de reconstruir los módulos de node con el comando

```
npm install
```
# Para evitar que se reinicie el servidor cuando se modifica el data.json
nodemon server/server -e js,html

```
revisar siempre en package json que este en el script el start: node server/server.js

también revisar que en server.js este el process.env.PORT para trabajar con el puerto de heroku
```