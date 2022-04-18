package com.exemple.bet3.livres.controller;
import com.exemple.bet3.livres.model.Livre;
import com.exemple.bet3.livres.service.LivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class LivreController {

    private final LivreService livreService;

    public LivreController(LivreService livreService) {
        this.livreService = livreService;
    }

    @PostMapping("/livres")
    public Livre saveLivre(@RequestBody Livre livre) {
        return livreService.saveLivre(livre);
    }

    @GetMapping("/livres")
    public List<Livre> getAllLivres() {
        return livreService.getAllLivres();
    }

    @GetMapping("/livres/{id}")
    public ResponseEntity<Livre> getLivreById(@PathVariable("id") Long id) {
        Livre livre = null;
        livre = livreService.getLivreById(id);
        return ResponseEntity.ok(livre);
    }

    @DeleteMapping("/livres/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteLivre(@PathVariable("id") Long id) {
        boolean deleted = false;
        deleted =livreService.deleteLivre(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/livres/{id}")
    public ResponseEntity<Livre> updateLivre(@PathVariable("id") Long id,
                                           @RequestBody Livre livre) {
        livre = livreService.updateLivre(id,livre);
        return ResponseEntity.ok(livre);
    }

}
