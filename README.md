## Set up 
Pour lancer le serveur de BDD en ligne de commande:
	 
```
cd dans le dossier contenant hsqldb.jar
```
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
Premièrement excusez moi pour le retard de dépot.

Cette WebAPP n'a pas réellement de sens en elle même, elle m'a surtout permis de découvrir Springboot, créer une API complète et découvrir react avec Next.js. 

C'est le premier projet que j'ai réalisé avec le langage Java et la première API implémentée, j'ai aussi découvert react.
J'ai bien implémenté les méthodes CRUD.
            
### Difficultés :
J'ai crée 3 entity:  
> User, Livre et Auteur.

J'ai eu des difficultés à implémenter le OneToMany et ManyToOne, mes entitées n'ont donc pas encore de relation entre elles.