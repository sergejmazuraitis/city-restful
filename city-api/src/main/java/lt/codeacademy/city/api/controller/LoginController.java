package lt.codeacademy.city.api.controller;

import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.dto.LoginUserDto;
import lt.codeacademy.city.api.entity.User;
import lt.codeacademy.city.api.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(Endpoint.LOGIN)
    public LoginUserDto login(@AuthenticationPrincipal User user) {
        return new LoginUserDto(user);
    }
}
