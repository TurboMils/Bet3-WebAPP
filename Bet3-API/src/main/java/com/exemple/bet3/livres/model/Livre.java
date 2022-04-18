package com.exemple.bet3.livres.model;
import com.example.bet3.livres.model.Auteur;
public class Livre {

    private Long id;
    private Integer nbPages;
    private String titre;
    private String auteur;
    // private Auteur auteur;

    // public Livre(Long id, Integer nbPages, String titre, Auteur auteur) {
    //     this.id = id;
    //     this.nbPages = nbPages;
    //     this.titre = titre;
    //     this.auteur = auteur;
    // }

    public Livre(Long id, Integer nbPages, String titre, String auteur) {
        this.id = id;
        this.nbPages = nbPages;
        this.titre = titre;
        this.auteur = auteur;
    }

    public Livre() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNbPages() {
        return nbPages;
    }

    public void setNbPages(Integer nbPages) {
        this.nbPages = nbPages;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    // public Auteur getAuteur() {
    //     return auteur;
    // }

    // public void setAuteur(Auteur auteur) {
    //     this.auteur = auteur;
    // }




}