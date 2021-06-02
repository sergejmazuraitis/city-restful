package lt.codeacademy.city.api.security;

import lombok.Data;

@Data
public class LoginDto {
    private String username;
    private String password;
}
