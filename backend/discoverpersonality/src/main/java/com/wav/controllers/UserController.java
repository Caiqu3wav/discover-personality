package com.wav.controllers;

import com.wav.entities.User;
import com.wav.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {


    @Autowired
    private UserService userService;

     @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
            User savedUser = userService.saveUser(user);
            return ResponseEntity.ok("User created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating user");
        }
    }

        @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        return updatedUser != null ? ResponseEntity.ok(updatedUser) : ResponseEntity.notFound().build();
    }

    @PutMapping("/update-mbti/{id}")
    public ResponseEntity<User> updateMbtiType(@PathVariable Long id, @RequestBody Map<String, String> request) {
        String mbtiType = request.get("mbtiType");
        User updatedUser = userService.updateMbti_type(id, mbtiType);
        return updatedUser != null ? ResponseEntity.ok(updatedUser) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
    if (user != null) {
        return ResponseEntity.ok(user);
    } else {
        return ResponseEntity.notFound().build();
    } 
}

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping("/username/{userName}")
    public User getUserByUsername(@PathVariable String username){
        return userService.getUserByUsername(username);
    }
}