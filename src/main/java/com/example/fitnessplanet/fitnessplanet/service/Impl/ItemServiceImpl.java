package com.example.fitnessplanet.fitnessplanet.service.Impl;

import com.example.fitnessplanet.fitnessplanet.dto.ItemDTO;
import com.example.fitnessplanet.fitnessplanet.entity.Item;
import com.example.fitnessplanet.fitnessplanet.repository.ItemRepository;
import com.example.fitnessplanet.fitnessplanet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;

    @Override
    public void deleteByName(String productName) {
        Optional<Item> optionalItem = itemRepository.findByProductName(productName);
        if (optionalItem.isPresent()) {
            itemRepository.delete(optionalItem.get());
        } else {
            throw new RuntimeException("Product not found for deletion.");
        }
    }

    @Override
    public String save(ItemDTO itemDTO) {
        // Check if a product with the same name already exists
        Optional<Item> existingItem = itemRepository.findByProductName(itemDTO.getProductName());

        if (existingItem.isPresent()) {
            // If the product exists, throw an exception or handle the error accordingly
            throw new RuntimeException("Product with the same name already exists. Cannot create a new one.");
        }

        // If the product doesn't exist, proceed with saving or updating
        Item product = new Item();

        if (itemDTO.getItemId() != null) {
            Optional<Item> foundItem = itemRepository.findById(itemDTO.getItemId());
            if (foundItem.isPresent()) {
                product = foundItem.get();
            } else {
                throw new RuntimeException("Product data not found for update.");
            }
        }

        product.setProductName(itemDTO.getProductName());
        product.setDescription(itemDTO.getDescription());
        product.setPrice(itemDTO.getPrice());
        product.setCategory(itemDTO.getCategory());
        product.setImageUrl(itemDTO.getImageUrl());

        itemRepository.save(product);

        return "Product successfully saved/updated";
    }


    @Override
    public List<Item> getAll() {
        return itemRepository.findAll();
    }

    @Override
    public Optional<Item> getById(Integer productId) {
        return itemRepository.findById(productId);
    }

    @Override
    public void deleteById(Integer productId) {
        itemRepository.deleteById(productId);
    }


}
