package com.exemple.bet3.livres.service;
import com.exemple.bet3.livres.entity.LivreEntity;
import com.exemple.bet3.livres.model.Livre;
import com.exemple.bet3.livres.repository.LivreRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LivreServiceImpl implements LivreService{

    private LivreRepository livreRepository;

    public LivreServiceImpl(LivreRepository livreRepository) {
        this.livreRepository = livreRepository;
    }

    @Override
    public Livre saveLivre(Livre livre) {
        LivreEntity livreEntity = new LivreEntity();
        BeanUtils.copyProperties(livre, livreEntity);
        livreRepository.save(livreEntity);
        return livre;
    }

    @Override
    public List<Livre> getAllLivres() {
        List<LivreEntity> livreEntities
                = livreRepository.findAll();

        List<Livre> livres = livreEntities
                .stream()
                .map(livreEntity -> new Livre(
                        livreEntity.getId(),
                        livreEntity.getNbPages(),
                        livreEntity.getTitre(),
                        livreEntity.getAuteur()

                ))
                .collect(Collectors.toList());

        return livres;
    }

    @Override
    public Livre getLivreById(Long id) {
        LivreEntity livreEntity
                = livreRepository.findById(id).get();
        Livre livre = new Livre();
        BeanUtils.copyProperties(livreEntity, livre);
        return livre;
    }

    @Override
    public boolean deleteLivre(Long id) {
        LivreEntity livre =  livreRepository.findById(id).get();
        livreRepository.delete(livre);
        return true;
    }

    @Override
    public Livre updateLivre(Long id, Livre livre) {
        LivreEntity livreEntity =
                livreRepository.findById(id).get();
        livreEntity.setAuteur(livre.getAuteur());
        livreEntity.setTitre(livre.getTitre());
        livreEntity.setNbPages(livre.getNbPages());
        livreRepository.save(livreEntity);
        return livre;
    }

}