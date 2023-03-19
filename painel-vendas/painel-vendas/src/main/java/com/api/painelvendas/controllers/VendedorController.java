package com.api.painelvendas.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.painelvendas.models.VendedorModel;
import com.api.painelvendas.services.VendedorService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/vendedor")
public class VendedorController {

	final VendedorService vendedorService;

	public VendedorController(VendedorService vendedorService) {
		this.vendedorService = vendedorService;
	}
	
	@PostMapping
    public ResponseEntity<Object> saveParkingSpot(@RequestBody @Valid VendedorModel vendedorModel){
        return ResponseEntity.status(HttpStatus.CREATED).body(VendedorService.save(vendedorModel));
		}
}
