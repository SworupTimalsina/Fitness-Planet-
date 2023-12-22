package com.example.fitnessplanet.fitnessplanet.service.Impl;

import com.example.fitnessplanet.fitnessplanet.dto.UserDTO;
import com.example.fitnessplanet.fitnessplanet.entity.User;
import com.example.fitnessplanet.fitnessplanet.repository.UserRepository;
import com.example.fitnessplanet.fitnessplanet.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public String save(UserDTO userDTO) {
        // Implement save logic here
        return null;
    }

    @Override
    public List<User> getAll() {
        // Implement get all logic here
        return null;
    }

    @Override
    public Optional<User> getById(Integer id) {
        // Implement get by id logic here
        return Optional.empty();
    }

    @Override
    public void deleteById(Integer id) {
        // Implement delete by id logic here
    }

    @Override
    public boolean validateLogin(String username, String password) {
            // Retrieve the user by username from the database
            Optional<User> userOptional = userRepository.findByUsername(username);

            // Check if the user exists and the password matches
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                return user.getPassword().equals(password);
            }

            return false; // Username not found or password does not match
        }


    }
