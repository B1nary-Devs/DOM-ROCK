package com.api.painelvendas.controllers;

import com.api.painelvendas.dtos.VendedorLoginDto;
import com.api.painelvendas.services.VendedorService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/login")
public class LoginController {

    final VendedorService vendedorService;

    public LoginController(VendedorService vendedorService) {
        this.vendedorService = vendedorService;
    }

//    @PostMapping
//    public Integer loginVendedor(@RequestBody @Valid VendedorLoginDto vendedorLoginDto) {
//        Integer id = vendedorService.findByEmailAndSenha(vendedorLoginDto.getEmail(), vendedorLoginDto.getSenha());
//        if (id != null) {
//            return id;
//        }
//        return null;
//    }

    @PostMapping
    public Integer saveVendedor(@RequestBody @Valid VendedorLoginDto vendedorLoginDto) {
        if (vendedorService.existsByEmailVendedor(vendedorLoginDto.getEmail()) &&
                vendedorService.existsBySenhaVendedor(vendedorLoginDto.getSenha())) {
            return vendedorLoginDto.getId();
        } else {
            return null;
        }

    }


}
