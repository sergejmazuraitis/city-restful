package lt.codeacademy.city.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.*;

@Getter
@Setter
@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;

    @NotNull
    @Size(min = 2, max = 250)
    private String name;

    @NotNull
    @Size(min = 3, max = 250)
    private String surname;

    @NotNull
    @Size(min = 1, max = 250)
    @Column(unique = true)
    private String username;

    @NotNull
    private String phone;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d).{8,}$")
    private String password;

    @ManyToMany
    private Set<Role> roles;
}
