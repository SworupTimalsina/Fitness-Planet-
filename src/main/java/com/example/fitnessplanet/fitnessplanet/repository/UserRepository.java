package com.example.fitnessplanet.fitnessplanet.repository;

import com.example.fitnessplanet.fitnessplanet.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}

