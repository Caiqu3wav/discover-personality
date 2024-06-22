package com.wav.discoverpersonality;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories; 

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.wav.repositories")
@EntityScan(basePackages = "com.wav.entities")
@ComponentScan(basePackages = "com.wav")
public class DiscoverpersonalityApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiscoverpersonalityApplication.class, args);
	}

}
