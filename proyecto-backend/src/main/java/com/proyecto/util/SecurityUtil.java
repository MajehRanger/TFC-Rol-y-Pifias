package com.proyecto.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.proyecto.model.Player;
import com.proyecto.security.UserDetailsImpl;

public class SecurityUtil {

    public static Long getCurrentPlayerId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl principal)) {
            throw new IllegalStateException("User not authenticated or principal type not supported.");
        }
        return principal.getPlayer().getId();
    }

    public static Player getCurrentPlayer() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl principal)) {
            throw new IllegalStateException("User not authenticated or principal type not supported.");
        }
        return principal.getPlayer();
    }
}
