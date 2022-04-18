package com.exemple.bet3.usermanagement.controller;
import com.exemple.bet3.livres.model.Livre;
import com.exemple.bet3.usermanagement.model.User;
import com.exemple.bet3.usermanagement.repository.UserRepository;
import com.exemple.bet3.usermanagement.service.UserService;
import com.exemple.bet3.livres.service.LivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;


@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class UserController {
    @Autowired
    private LivreService livreService;
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        User user = null;
        user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable("id") Long id) {
        boolean deleted = false;
        deleted =userService.deleteUser(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
                                           @RequestBody User user) {
        user = userService.updateUser(id,user);
        return ResponseEntity.ok(user);
    }

    /*
    @GetMapping("/users/{id}/livres")
    public List<Livre> listerLivres(@PathVariable("id") Long id) {
		return livreService.findById(id).get().getLivres();
	}
*/

}
