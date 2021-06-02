package lt.codeacademy.city.api.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import lt.codeacademy.city.api.entity.Role;
import lt.codeacademy.city.api.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toSet;

@Service
public class JwtService {

    private final long tokenValidityMillis;
    private final byte[] secretKey;

    public JwtService(@Value("#{${security.jwt.validity-mins} * 60000}") long tokenValidityMillis,
                      @Value("${security.jwt.secret-key}") byte[] secretKey) {
        this.tokenValidityMillis = tokenValidityMillis;
        this.secretKey = secretKey;
    }

    public String createToken(User user) {

        Date now = new Date();

        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setIssuer("city-api")
                .setAudience("city-api")
                .setSubject(user.getUsername())
                .setExpiration(new Date(now.getTime() + tokenValidityMillis))
                .setIssuedAt(now)
                .claim("roles", user.getRoles()
                    .stream()
                    .map(Role::getName)
                    .collect(toSet()))
                .signWith(Keys.hmacShaKeyFor(secretKey), SignatureAlgorithm.HS512)
                .compact();
    }

    public Authentication parseToken(String jwt) {

        Claims parsedJwtBody;
        try {
            parsedJwtBody = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(jwt)
                    .getBody();
        }catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException |
                SignatureException | IllegalArgumentException e) {
            return null;
        }

        String username = parsedJwtBody.getSubject();
        List<GrantedAuthority> roles = ((List<String>) parsedJwtBody.get("roles"))
                .stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(toList());
        return new UsernamePasswordAuthenticationToken(username, null, roles);
    }
}
