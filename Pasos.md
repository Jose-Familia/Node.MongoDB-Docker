# Instalar dependencias

npm install express Mongoose

## Construir la imagen hellonode

docker build -t hellonode .

## Ejecutar el contenedor hellonode

docker run -d -p 8080:8080 hellonode

## Verificar que el contenedor esta corriendo

docker ps

## Descargar las imagenes de node y mongo (docker-compose)

docker-compose up

## Conectarse al contenedor

docker exec -it <container_name> bash

## Instalar dependencias (nodemon)

npm install -g nodemon

