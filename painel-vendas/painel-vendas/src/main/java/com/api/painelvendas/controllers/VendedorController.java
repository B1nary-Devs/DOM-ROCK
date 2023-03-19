package com.api.painelvendas.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.painelvendas.services.VendedorService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/vendedor")
public class VendedorController {

	final VendedorService vendedorService;

	public VendedorController(VendedorService vendedorService) {
		this.vendedorService = vendedorService;
	}
	
	
	
}
