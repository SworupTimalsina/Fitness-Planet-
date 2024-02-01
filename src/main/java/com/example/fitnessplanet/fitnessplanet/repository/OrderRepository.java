package com.example.fitnessplanet.fitnessplanet.repository;

import com.example.fitnessplanet.fitnessplanet.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    // You can add custom query methods if needed
}