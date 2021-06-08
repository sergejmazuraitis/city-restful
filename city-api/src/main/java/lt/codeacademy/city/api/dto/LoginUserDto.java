package lt.codeacademy.city.api.dto;

import lombok.Data;
import lt.codeacademy.city.api.entity.Role;
import lt.codeacademy.city.api.entity.User;

import java.util.Set;

import static java.util.stream.Collectors.toSet;

@Data
public class LoginUserDto {
    String username;
    String fullName;
    Set<String> roles;

    public LoginUserDto(User user) {
        this.username = user.getUsername();
        this.fullName = user.getName() + " " + user.getSurname();
        this.roles = user.getRoles().stream()
                .map(Role::getName)
                .collect(toSet());
    }
}
