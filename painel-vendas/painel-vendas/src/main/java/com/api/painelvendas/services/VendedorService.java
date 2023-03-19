package com.api.painelvendas.services;


import org.springframework.stereotype.Service;

import com.api.painelvendas.repositories.VendedorRepository;

@Service
public class VendedorService {
	
	final VendedorRepository vendedorRepository;
	
	public VendedorService(VendedorRepository vendedorRepository) {
		this.vendedorRepository = vendedorRepository;
	}
}
