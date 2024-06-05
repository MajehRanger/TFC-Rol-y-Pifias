package com.proyecto.service.impl;

import com.proyecto.model.Player;
import com.proyecto.repository.PlayerRepository;
import com.proyecto.security.UserDetailsImpl;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final PlayerRepository playerRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Player player = playerRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Email not found"));
        return (new UserDetailsImpl(player, player.getEmail(), player.getPassword()));
    }
}
