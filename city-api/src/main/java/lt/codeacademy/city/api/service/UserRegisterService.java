package lt.codeacademy.city.api.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.city.api.entity.Role;
import lt.codeacademy.city.api.entity.User;
import lt.codeacademy.city.api.exception.RoleFoundExeption;
import lt.codeacademy.city.api.repository.RoleRepository;
import lt.codeacademy.city.api.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Slf4j
public class UserRegisterService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    public UserRegisterService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public void addNewUser(User user) {
        try {
            String encodedPassword = passwordEncoder.encode(user.getPassword()).trim();
            user.setPassword(encodedPassword);
            Role role = roleRepository.findByName("USER").orElseThrow(RoleFoundExeption::new);
            user.addRole(role);
            userRepository.save(user);
        } catch (IllegalArgumentException e) {
            log.error("Cannot create User {}", user);
        }
    }

    public User getUserById(UUID id) {
        return userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException(id.toString()));
    }

    public void updateUser(User user) {
        try {
            String encodedPassword = passwordEncoder.encode(user.getPassword()).trim();
            user.setPassword(encodedPassword);
            Role role = roleRepository.findByName("USER").orElseThrow(RoleFoundExeption::new);
            user.addRole(role);
            userRepository.save(user);
        } catch (IllegalArgumentException e) {
            log.error("Cannot create User {}", user);
        }
    }

    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }
}
