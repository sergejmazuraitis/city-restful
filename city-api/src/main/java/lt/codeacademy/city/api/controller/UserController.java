package lt.codeacademy.city.api.controller;

import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.entity.User;
import lt.codeacademy.city.api.service.UserRegisterService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping(Endpoint.USER)
public class UserController {
    private final UserRegisterService userService;

    public UserController(UserRegisterService userService) {
        this.userService = userService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addNewUser(@Valid @RequestBody User user) {
        userService.addNewUser(user);
    }

    @GetMapping(Endpoint.UUID_VAR)
    public User getUserById(@PathVariable(Endpoint.UUID) UUID uuid) {
        return userService.getUserById(uuid);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void updateUser(@Valid @RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping(Endpoint.UUID_VAR)
    public void deleteUser(@PathVariable(Endpoint.UUID) UUID uuid){
        userService.deleteUser(uuid);
    }
}
