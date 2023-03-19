package com.api.painelvendas.services;


import org.springframework.stereotype.Service;

import com.api.painelvendas.models.VendedorModel;
import com.api.painelvendas.repositories.VendedorRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
public class VendedorService {
	
	final VendedorRepository vendedorRepository;
	
	public VendedorService(VendedorRepository vendedorRepository) {
		this.vendedorRepository = vendedorRepository;
	}
	@Transactional
	public static VendedorModel save(VendedorModel vendedorModel) {
		return vendedorRepository.save(vendedorModel);
	}
}
