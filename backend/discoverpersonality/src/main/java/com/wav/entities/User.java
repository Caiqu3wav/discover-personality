package com.wav.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long id; 

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String email;

    @Column(name = "mbti_type", nullable = true)
    private String mbti_type;


    public User() {
    }

}
