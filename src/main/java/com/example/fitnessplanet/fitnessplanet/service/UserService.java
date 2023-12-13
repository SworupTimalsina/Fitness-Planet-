package com.example.fitnessplanet.fitnessplanet.service;

import com.example.fitnessplanet.fitnessplanet.User;
import com.example.fitnessplanet.fitnessplanet.dto.UserDTO;


import java.util.List;
import java.util.Optional;

public interface UserService {
    String save(UserDTO userDTO);

    List<User> getAll();

    Optional<User> getById(Integer id);

    void deleteById(Integer id);
}