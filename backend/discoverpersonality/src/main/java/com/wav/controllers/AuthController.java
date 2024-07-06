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
    private UserService userService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if (user != null) {
            return ResponseEntity.ok(new AuthResponse(user.getId(), user.getUsername(), user.getEmail(), user.getMbti_type()));
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
    private String mbtiType;

    public AuthResponse(Long id, String username, String email, String mbtiType) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.mbtiType = mbtiType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMbti_type() {
        return mbtiType;
    }

    public void setMbti_type(String mbtiType) {
        this.mbtiType = mbtiType;
    }
}
