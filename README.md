# GuacamoleFlix

Projet d'école dans le cadre du cours Gestion de projet Fullstack

## Développement

Nécessite Node.js 8.12

/!\ Le dossier client et server sont deux projets indépendants, pensez à faire un :
```shell
$ npm install
```

dans chacun des dossiers pour pouvoir développer.

Démarrage du container Docker MongoDB
```shell
$ docker-compose up mongo
```
## Docker

Pour tester l'application:
```shell
$ docker-compose up
```

## Environnement
Voici un exemple de fichier d'environnement ".env" à placer à la racine du projet
```env
DB_NAME=guacamoleflix
MONGODB_URI=mongodb://localhost:27017/guacamoleflix
MONGODB_USER=mongo_admin
MONGODB_PASS=MyStrongPassword
SERVER_PORT=3000
ENV=development #Permet de passer outre le auth check pour l'api
PREFIX=/api
```

##Postman

Documentation de l'api
https://documenter.getpostman.com/view/1552186/RzfcNX7n
