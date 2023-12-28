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
    public String save(ItemDTO itemDTO) {

        Item product = new Item();

        if (ItemDTO.getItemId()!=null){
            product=itemRepository.findById(itemDTO.getItemId())
                    .orElseThrow(()->new NullPointerException("product data not found"));
        }

//        product.setProductName(ItemDTO.getItemName());
//        product.setDescription(itemDTO.getDescription());
//        product.setPrice(itemDTO.getPrice());
//        product.setQuantity(itemDTO.getQuantity());
//        product.setSize(ItemDTO.getSize());
//        product.setType(ItemDTO.getType());
//        product.setCategory(ItemDTO.getCategory());

        itemRepository.save(product);

        return "product successfully added";
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