package com.proyecto.security.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
@AllArgsConstructor
public class JwtService {
    // Trabaja con el token
    private final JwtProperties jwtProperties;

    private SecretKey getSignInKey() {
        return Keys.hmacShaKeyFor(jwtProperties.getSecretKey().getBytes(StandardCharsets.UTF_8));
    }

    public String createToken(String email) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + jwtProperties.getExpiration());
        return Jwts.builder().subject(email).issuedAt(now).expiration(validity).signWith(getSignInKey()).compact();
    }

    public Boolean isValidToken(String token) {
        try {
            Jwts.parser().verifyWith(getSignInKey()).build().parseSignedClaims(token).getPayload().getSubject();
            return true;
        } catch (ExpiredJwtException e) {
            System.out.println("Expired Token");
        } catch (UnsupportedJwtException e) {
            System.out.println("Unsupported Token");
        } catch (MalformedJwtException e) {
            System.out.println("Malformed Token");
        } catch (SignatureException e) {
            System.out.println("Bad Signature Token");
        } catch (IllegalArgumentException e) {
            System.out.println("Illegal Arg");
        }
        return false;
    }

    public String getEmailForToken(String token) {
        return Jwts.parser().verifyWith(getSignInKey()).build().parseSignedClaims(token).getPayload().getSubject();
    }
}
