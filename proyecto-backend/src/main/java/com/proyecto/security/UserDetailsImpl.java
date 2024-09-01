package com.proyecto.security;

import com.proyecto.model.Player;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDetailsImpl implements UserDetails {

    private Player player;
    private String email;
    private String password;

    public static UserDetailsImpl build(Player player) {
        return new UserDetailsImpl(player, player.getEmail(), player.getPassword());
    }

    // Para roles y permisos (no se usan por ahora)
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>();
    }

    @Override
    public String getUsername() {
        return "";
    }
}
