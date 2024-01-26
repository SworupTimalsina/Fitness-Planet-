package com.example.fitnessplanet.fitnessplanet.controller;

import com.example.fitnessplanet.fitnessplanet.dto.ItemDTO;
import com.example.fitnessplanet.fitnessplanet.entity.Item;
import com.example.fitnessplanet.fitnessplanet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins ="http://localhost:5173/")
@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;
    @GetMapping("/data")
    public String getData(){
        return "data retrieved";
    }


    @PostMapping("/save")
    public String createData(@RequestBody ItemDTO itemDTO){
        System.out.println(itemDTO);
        itemService.save(itemDTO);
        return "created data";
    }

    @GetMapping("/getAll")
    public List<Item> getAllData(){
        return itemService.getAll();

    }

    @GetMapping("/getById/{id}")
    public Optional<Item> getById(@PathVariable("id") Integer id){
        return itemService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") Integer productId){
        itemService.deleteById(productId);
        return "product deleted.";
    }
    @CrossOrigin(origins = "http://localhost:5173/admin")
    @DeleteMapping("/deleteByName/{productName}")
    public String deleteByName(@PathVariable("productName") String productName) {
        itemService.deleteByName(productName);
        return "product deleted by name.";
    }
}

