package com.coaching.backend.controller;
import com.coaching.backend.dto.LoginRequest;
import com.coaching.backend.dto.RegisterRequest;
import com.coaching.backend.model.User;
import com.coaching.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/test")
    public String test() {
        return "Backend Working!";
    }

    @PostMapping("/register")
    public User register(@Valid @RequestBody RegisterRequest request) {
        return userService.register(request);
    } 

    @PostMapping("/login")
public String login(
        @Valid @RequestBody LoginRequest request
) {
    return userService.login(request);
}
}