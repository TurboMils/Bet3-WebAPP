package com.exemple.bet3.livres.entity;
import com.example.bet3.livres.model.Auteur;
import javax.persistence.*;

@Entity
@Table(name = "livres")
public class LivreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Integer nbPages;
    private String titre;
    private String auteur;
    // @Embedded
    // private Auteur auteur;

    public long getId() {
        return id;
    }

    public void setId(long id) {
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