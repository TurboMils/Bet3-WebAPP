package com.exemple.bet3.livres.repository;

import com.exemple.bet3.livres.entity.LivreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivreRepository extends JpaRepository<LivreEntity,Long> {
}
