package com.wav.controllers;

import com.wav.entities.User;
import com.wav.services.AuthService;
import com.wav.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        User user = authService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if (user != null) {
            return ResponseEntity.ok(new AuthResponse(user.getId(), user.getUsername(), user.getEmail()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}

class LoginRequest {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

class AuthResponse {
    private Long id;
    private String username;
    private String email;
    private String mbti_type;

    public AuthResponse(Long id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.mbti_type = mbti_type;
    }

}
