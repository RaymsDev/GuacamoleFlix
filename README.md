# GuacamoleFlix

## Développement

/!\ Le dossier client et server sont deux projets indépendants, pensez à faire un :
```shell
$ npm install
```

dans chacun des dossiers pour pouvoir développer.

Démarrage du container Docker MongoDB
```shell
$ cd server
$ npm run mongo
```
## Docker

Pour tester l'application:
```shell
$ docker-compose up
```

## Environnement
Voici un exemple de fichier d'environnement ".env" à placer à la racine du projet
```shell
MONGODB_ADMINUSERNAME=root
MONGODB_ADMINPASSWORD=MyStrongPassword
SERVER_PORT=3000
```