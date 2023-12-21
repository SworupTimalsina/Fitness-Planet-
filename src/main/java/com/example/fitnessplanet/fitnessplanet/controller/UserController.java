package com.example.fitnessplanet.fitnessplanet.controller;



import com.example.fitnessplanet.fitnessplanet.entity.User;
import com.example.fitnessplanet.fitnessplanet.dto.UserDTO;
import com.example.fitnessplanet.fitnessplanet.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // restful API
@RequestMapping("/user")
@RequiredArgsConstructor // to inject dependency, reduced code
public class UserController {

    private final UserService userService;

    @GetMapping("/data")
    public String getData(){
        return "data retrieved";
    }

    @PostMapping("/save")
    public String createData(@RequestBody UserDTO userDTO){
        System.out.println(userDTO);
        userService.save(userDTO);


        return "Created data";

    }
    @GetMapping("/getAll")
    public List<User> getAll(){
        return userService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<User> getById(@PathVariable("id") Integer id){
        return userService.getById(id);

    }

    @DeleteMapping("/deleteById/{id}")
    public void delete(@PathVariable("id") Integer id){
        userService.deleteById(id);
    }

//    @PostMapping("/login")
//    public String login(@RequestBody UserDTO userDTO) {
//        Optional<User> userOptional = userService.getByUsername(userDTO.getUsername());
//
//        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//
//            if (user.getPassword().equals(userDTO.getPassword())) {
//                return "Login successful!";
//            } else {
//                return "Invalid password. Please try again.";
//            }
//        } else {
//            return "User not found. Please register first.";
//        }
//    }
}







