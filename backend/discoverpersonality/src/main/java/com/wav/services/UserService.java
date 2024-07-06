package com.wav.services;

import com.wav.entities.User;
import com.wav.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        if (user.getMbti_type() == null || user.getMbti_type().isEmpty()) {
            user.setMbti_type(null);
        }

        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User updateUser(Long id, User user) {
        Optional<User> existingUserOptional = userRepository.findById(id);
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setUsername(user.getUsername());
            String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
            existingUser.setPassword(encryptedPassword);
            existingUser.setEmail(user.getEmail());
            existingUser.setMbti_type(user.getMbti_type());
            return userRepository.save(existingUser);
        }
        return null;
    }

    public User updateMbti_type(Long id, String mbtiType) {
        if (mbtiType == null || mbtiType.isEmpty()) {
            throw new IllegalArgumentException("MBTI type cannot be null or empty");
        }

        Optional<User> existingUserOptional = userRepository.findById(id);
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setMbti_type(mbtiType);
            return userRepository.save(existingUser);
        }
        return null;
    }

    public User authenticate(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (bCryptPasswordEncoder.matches(password, user.getPassword())) {
                return user;
            }
        }

        return null;
    }
}
