package com.weather.report.controller;

import com.weather.report.exception.UserNotFoundException;
import com.weather.report.model.Login;
import com.weather.report.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")

public class LoginController {
    @Autowired
    private LoginRepository loginRepository;

    @PostMapping("/adduser1")
    Login newlogin(@RequestBody Login newLogin) {

        return loginRepository.save(newLogin);
    }

    @GetMapping("/getusers2")
    List<Login> getLogin() {
        return loginRepository.findAll();
    }

    @PutMapping("/update3/{id}")
    Login updateLogin(@RequestBody Login newLogin, @PathVariable Long id) {
        return loginRepository.findById(id).map(user -> {
            user.setUserName(newLogin.getUsername());
            user.setPassword(newLogin.getPassword());

            return loginRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }


    @DeleteMapping("/delete123/{id}")
    String deleteLogin(@PathVariable Long id) {
        if (!loginRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        loginRepository.deleteById(id);
        return "Login with id" + id + " has been deleted.";
    }


    @GetMapping("/finduser123/{id}")
    Login getUserById(@PathVariable Long id){
        return loginRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }
}