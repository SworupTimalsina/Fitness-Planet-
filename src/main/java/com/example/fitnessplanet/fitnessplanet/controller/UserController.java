package com.example.fitnessplanet.fitnessplanet.controller;



import com.example.fitnessplanet.fitnessplanet.entity.User;
import com.example.fitnessplanet.fitnessplanet.dto.UserDTO;
import com.example.fitnessplanet.fitnessplanet.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // restful API
@RequestMapping("/user")
@RequiredArgsConstructor // to inject dependency, reduced code
@CrossOrigin(origins = "http://localhost:5173")

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

    @PostMapping("/validateLogin")
    public ResponseEntity<String> validateLogin(@RequestBody UserDTO userDTO) {

        System.out.println("Received request with userDTO: " + userDTO);
        // Validate login logic using the userService
        boolean isValidLogin = userService.validateLogin(userDTO.getUsername(), userDTO.getPassword());

        if (isValidLogin) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }


}

