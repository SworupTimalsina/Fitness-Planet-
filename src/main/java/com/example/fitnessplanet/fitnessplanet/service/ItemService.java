package com.example.fitnessplanet.fitnessplanet.service;

import com.example.fitnessplanet.fitnessplanet.dto.ItemDTO;
import com.example.fitnessplanet.fitnessplanet.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    String save(ItemDTO productDTO);
    List<Item> getAll();
    Optional<Item> getById(Integer productId);
    void deleteById(Integer productId);
}
