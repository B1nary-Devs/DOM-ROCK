package com.api.painelvendas.controllers;

import com.api.painelvendas.dtos.VendedorLoginDto;
import com.api.painelvendas.models.Administrador;
import com.api.painelvendas.models.UserLogin;
import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.VendedorRepository;
import com.api.painelvendas.services.AdministradorService;
import com.api.painelvendas.services.VendedorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
public class LoginController {
    @Autowired
    VendedorService vendedorService;


    @Autowired
    AdministradorService  administradorService;

//    @PostMapping
//    public Integer loginVendedor(@RequestBody @Valid VendedorLoginDto vendedorLoginDto) {
//        Integer id = vendedorService.findByEmailAndSenha(vendedorLoginDto.getEmail(), vendedorLoginDto.getSenha());
//        if (id != null) {
//            return id;
//        }
//        return null;
//    }

    @PostMapping("/login")
    public ResponseEntity<?> doLogin (@RequestBody UserLogin userLogin) {
        String email = userLogin.getEmail();
        String senha = userLogin.getSenha();

        Vendedor vendedor = vendedorService.login(email, senha);
        Administrador administrador = administradorService.login(email, senha);

        if (vendedor == null && administrador == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (administrador != null) {
            return new ResponseEntity<Administrador>(administrador, HttpStatus.OK);
        }

        return new ResponseEntity<Vendedor>(vendedor, HttpStatus.OK);
    }

}
