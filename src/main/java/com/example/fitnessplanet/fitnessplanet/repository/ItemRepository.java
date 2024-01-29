package com.example.fitnessplanet.fitnessplanet.repository;

import com.example.fitnessplanet.fitnessplanet.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item, Integer> {
    Optional<Item> findByProductName(String productName);
}