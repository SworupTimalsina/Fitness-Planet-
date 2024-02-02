package com.example.fitnessplanet.fitnessplanet.service;

import com.example.fitnessplanet.fitnessplanet.dto.OrderDTO;
import com.example.fitnessplanet.fitnessplanet.dto.OrderHistoryDTO;
import com.example.fitnessplanet.fitnessplanet.entity.Order;

import java.util.List;

public interface OrderService {
    void createOrder(Order order);
    List<Order> getAllOrders();
    List<OrderHistoryDTO> getOrderHistory();
}