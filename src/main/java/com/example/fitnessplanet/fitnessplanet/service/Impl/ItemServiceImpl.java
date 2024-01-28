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
        Item product = new Item();

        if (itemDTO.getItemId() != null) {
            Optional<Item> existingItem = itemRepository.findById(itemDTO.getItemId());
            if (existingItem.isPresent()) {
                product = existingItem.get();
            } else {
                throw new RuntimeException("Product data not found for update.");
            }
        }

        product.setProductName(itemDTO.getProductName());
        product.setDescription(itemDTO.getDescription());
        product.setPrice(itemDTO.getPrice());
        product.setCategory(itemDTO.getCategory());

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
