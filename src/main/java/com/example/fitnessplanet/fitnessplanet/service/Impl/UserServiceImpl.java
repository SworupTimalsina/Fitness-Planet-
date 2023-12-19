package com.example.fitnessplanet.fitnessplanet.service.Impl;

import com.example.fitnessplanet.fitnessplanet.dto.UserDTO;
import com.example.fitnessplanet.fitnessplanet.entity.User;
import com.example.fitnessplanet.fitnessplanet.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    @Override
    public String save(UserDTO userDTO) {
        return null;
    }

    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public Optional<User> getById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void deleteById(Integer id) {

    }
}