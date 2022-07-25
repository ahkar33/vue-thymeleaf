package com.ace.vueboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ace.vueboot.entity.User;
import com.ace.vueboot.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserApi {

    @Autowired
    private UserService userService;

    @GetMapping("/findAllUsers")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user){
       String status = "";
       if(userService.addUser(user)){
        status = "success";
       } else {
        status = "fail";
       }
       return status;
    }

    @DeleteMapping("/deleteUser/{userId}")
    public void deleteUser(@PathVariable("userId") Long id){
       userService.deleteUser(id); 
    }

    @PutMapping("updateUser/{userId}")
    public void updateUser(@RequestBody User user, @PathVariable("userId") Long id){
        userService.updateUserById(user.getUserName(), user.getUserAddress(), id);
    }
}
