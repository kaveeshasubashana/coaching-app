package com.coaching.backend.service;

import com.coaching.backend.dto.RegisterRequest;
import com.coaching.backend.model.User;
import com.coaching.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.coaching.backend.dto.LoginRequest;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(RegisterRequest request) {

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        return userRepository.save(user);
    } 

    public String login(LoginRequest request) {

    User user = userRepository
            .findByEmail(request.getEmail())
            .orElse(null);

    if (user == null) {
        return "User not found";
    }

    boolean matches = passwordEncoder.matches(
            request.getPassword(),
            user.getPassword()
    );

    if (!matches) {
        return "Invalid password";
    }

    return "Login Successful";
}
}