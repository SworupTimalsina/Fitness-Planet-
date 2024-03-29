package com.example.fitnessplanet.fitnessplanet.service.Impl;



import com.example.fitnessplanet.fitnessplanet.dto.OrderHistoryDTO;
import com.example.fitnessplanet.fitnessplanet.entity.Order;
import com.example.fitnessplanet.fitnessplanet.repository.OrderRepository;
import com.example.fitnessplanet.fitnessplanet.service.OrderService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    @Transactional
    public void createOrder(Order order) {
        order.setOrderDate(LocalDateTime.now());

        orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAllByOrderByOrderDateDesc();
    }

    @Override
    public List<OrderHistoryDTO> getOrderHistory() {
        List<Order> orders = orderRepository.findAllByOrderByOrderDateDesc();
        return orders.stream().map(this::convertToOrderHistoryDTO).collect(Collectors.toList());
    }

    private OrderHistoryDTO convertToOrderHistoryDTO(Order order) {
        return new OrderHistoryDTO(
                order.getOrderId(),
                order.getProductName(),
                order.getPrice(),
                order.getQuantity(),
                order.getTotal(),
                order.getOrderDate()
        );
    }

}