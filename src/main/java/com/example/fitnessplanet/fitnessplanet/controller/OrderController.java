package com.example.fitnessplanet.fitnessplanet.controller;

import com.example.fitnessplanet.fitnessplanet.dto.OrderDTO;
import com.example.fitnessplanet.fitnessplanet.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/addOrders")
    public ResponseEntity<String> addOrders(@RequestBody List<OrderDTO> orderDTOList) {
        try {
            orderService.saveOrders(orderDTOList);
            return new ResponseEntity<>("Orders added successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding orders: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
