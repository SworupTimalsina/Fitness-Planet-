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
        User newUser = new User();
        newUser.setFirstName(userDTO.getFirstName());
        newUser.setLastName(userDTO.getLastName());
        newUser.setEmail(userDTO.getEmail());
        newUser.setUsername(userDTO.getUsername());
        newUser.setPassword(userDTO.getPassword());

        userRepository.save(newUser);

        return "User successfully saved";
    }

    @Override
    public List<User> getAll() {
        // Implement get all logic here
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getById(Integer id) {
        // Implement get by id logic here
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void deleteById(Integer id) {
        // Implement delete by id logic here
        userRepository.deleteById(id);
    }

    @Override
    public boolean validateLogin(String username, String password) {
        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getPassword().equals(password);
        }

        return false;
    }

    @Override
    public Optional<User> getByUserDTO(UserDTO userDTO) {
        // Retrieve the user by username from the database
        return userRepository.findByUsername(userDTO.getUsername());
    }

    @Override
    public String update(User user) {
        userRepository.save(user);
        return "User details updated successfully";
    }
}
