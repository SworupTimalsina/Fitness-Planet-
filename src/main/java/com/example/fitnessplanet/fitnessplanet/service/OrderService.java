package com.example.fitnessplanet.fitnessplanet.service;

import com.example.fitnessplanet.fitnessplanet.dto.OrderDTO;
import com.example.fitnessplanet.fitnessplanet.entity.Order;
import com.example.fitnessplanet.fitnessplanet.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void saveOrders(List<OrderDTO> orderDTOList) {
        for (OrderDTO orderDTO : orderDTOList) {
            Order order = new Order();
            order.setProductName(orderDTO.getProductName());
            order.setPrice(orderDTO.getPrice());
            order.setQuantity(orderDTO.getQuantity());
            order.setTotal(orderDTO.getTotal());

            orderRepository.save(order);
        }
    }
}