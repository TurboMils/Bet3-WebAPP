Premièrement excusez moi pour le retard de dépot. 


## Set up 
Pour lancer le serveur de BDD (hsqldb) en ligne de commande:
	 
```
cd dans le dossier contenant hsqldb.jar
```
Url BDD : 'jdbc:hsqldb:hsql://localhost/bet3db'
Lancer la commande : 
```
java -cp hsqldb.jar org.hsqldb.server.Server --database.0 file.bet3db --dbname.0 bet3db
```
Lancement du serveur :
```
cd Springboot_Project/bet3-ui/
```

```
npm run dev
```

## Explication projet  


Cette WebAPP n'a pas réellement de sens en elle même, elle m'a surtout permis de découvrir Springboot, créer une API complète et découvrir react avec Next.js. 

C'est le premier projet que j'ai réalisé avec le langage Java et la première API implémentée, j'ai aussi découvert react.
J'ai bien implémenté les méthodes CRUD.
            
### Difficultés :
J'ai crée 3 entity:  
> User, Livre et Auteur.

J'ai eu des difficultés à implémenter le OneToMany et ManyToOne, mes entitées n'ont donc pas encore de relation entre elles.

### Base de données : 

Base de données : hsqldb
3 tables dans la BDD.


![image](https://user-images.githubusercontent.com/93132535/163885827-ffdda526-370d-4cf6-9678-0911355bd26b.png)

Il n'y a pas de relation entre les tables..

### API : 

GET : tous les utilisateurs dans la table USERS
![image](https://user-images.githubusercontent.com/93132535/163883389-5dcd70e2-7225-41af-bfc2-963dc6e267ba.png)

POST : Ajouter un USERS à la table
![image](https://user-images.githubusercontent.com/93132535/163883327-94190d33-e73b-4869-98d0-33b6f0555c45.png)

GET : tous les livres dans la table LIVRES
![image](https://user-images.githubusercontent.com/93132535/163883758-35b8b385-b335-4224-878d-771a0a593a18.png)




