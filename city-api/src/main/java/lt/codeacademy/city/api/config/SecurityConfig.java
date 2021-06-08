package lt.codeacademy.city.api.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.security.JwtAuthenticationFilter;
import lt.codeacademy.city.api.security.JwtAuthorizationFilter;
import lt.codeacademy.city.api.security.JwtService;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final ObjectMapper objectMapper;
    private final UserDetailsService userService;
    private final JwtService jwtService;

    public SecurityConfig(ObjectMapper objectMapper,
                          UserDetailsService userService,
                          JwtService jwtService) {
        this.objectMapper = objectMapper;
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .authorizeRequests()
                    .antMatchers(Endpoint.ARTICLES, Endpoint.ARTICLE + "//**", Endpoint.COMMENTS).permitAll()
                    .anyRequest().authenticated()
                    .and()
                .exceptionHandling()
                    .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                    .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager(), objectMapper, jwtService))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), jwtService));
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userService)
                .passwordEncoder(encoder());
    }

    @Bean
    public PasswordEncoder encoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

        @Override
    public void configure(WebSecurity web) {
        web.ignoring().requestMatchers(
                PathRequest.toStaticResources().atCommonLocations())    //static files(css, js, images)
                .antMatchers("/h2/**");    //h2 console
    }

}
