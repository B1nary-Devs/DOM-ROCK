package com.api.painelvendas.controllers;

import com.api.painelvendas.dtos.VendedorLoginDto;
import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.VendedorRepository;
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


//    @PostMapping
//    public Integer loginVendedor(@RequestBody @Valid VendedorLoginDto vendedorLoginDto) {
//        Integer id = vendedorService.findByEmailAndSenha(vendedorLoginDto.getEmail(), vendedorLoginDto.getSenha());
//        if (id != null) {
//            return id;
//        }
//        return null;
//    }

    @PostMapping("/login")
    public ResponseEntity<Vendedor> doLogin (@RequestBody Vendedor vendedor) {
        Vendedor authenticatedVendedor = vendedorService.login(vendedor.getEmail(), vendedor.getPassword());
        if (authenticatedVendedor != null) {
            return ResponseEntity.ok(authenticatedVendedor);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }


}
