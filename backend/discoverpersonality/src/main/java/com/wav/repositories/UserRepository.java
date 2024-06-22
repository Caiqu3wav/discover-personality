package com.wav.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wav.entities.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    User findByUsername(String username);
}
