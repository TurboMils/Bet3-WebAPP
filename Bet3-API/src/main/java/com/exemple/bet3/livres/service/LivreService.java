package com.exemple.bet3.livres.service;

import com.exemple.bet3.livres.model.Livre;

import java.util.List;

public interface LivreService {
    Livre saveLivre(Livre Livre);

    List<Livre> getAllLivres();

    Livre getLivreById(Long id);

    boolean deleteLivre(Long id);

    Livre updateLivre(Long id, Livre Livre);
}