package com.proyecto.security.jwt;

import org.springframework.context.annotation.Configuration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Configuration
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtProperties {
    //Clave de desencriptado del token
    private String secretKey = "48uIJpOEOyPpXEb1eOLd/T/XSFS0vpd2mMRusY1p5Qil90/Qi7sBiLdTqJBCSeQoIOLVHXCQQWCFPrX0/P3Ufw==";
    //cuanto dura el token en milisegundos (24h)
    private long expiration = 86400000;

}