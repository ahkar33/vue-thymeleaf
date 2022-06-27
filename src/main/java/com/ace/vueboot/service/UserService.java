package com.ace.vueboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ace.vueboot.entity.User;
import com.ace.vueboot.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean addUser(User user) {
        return userRepository.save(user) != null;
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    public void updateUserById(String userName, String userAddress, Long userId){
        userRepository.updateUserById(userName, userAddress, userId);
    }

}
