package com.wav.services;

import com.wav.entities.User;
import com.wav.repositories.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthRepository authRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User authenticate(String email, String password) {
        return authRepository.findByEmail(email)
        .filter(user -> bCryptPasswordEncoder.matches(password, user.getPassword()))
        .orElse(null);
    }
}
