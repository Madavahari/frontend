package com.weather.report.controller;

import com.weather.report.exception.UserNotFoundException;
import com.weather.report.model.User;
import com.weather.report.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")

public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/adduser")
    User newuser(@RequestBody User newUser) {

        return userRepository.save(newUser);
    }

    @GetMapping("/getusers")
    List<User> getUser() {
        return userRepository.findAll();
    }

    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setCity(newUser.getCity());
            user.setTemperature(newUser.getTemperature());
            user.setHumidity(newUser.getHumidity());
            user.setWind(newUser.getWind());
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }


    @DeleteMapping("/delete/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id" + id + " has been deleted.";
    }


    @GetMapping("/finduser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }
}