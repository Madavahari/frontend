package com.weather.report.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id){
        super("This user is not exist");
    }
}
