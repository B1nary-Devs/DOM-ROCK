package com.api.painelvendas.services;


import org.springframework.stereotype.Service;

import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.VendedorRepository;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class VendedorService {
	
	final VendedorRepository vendedorRepository;
	
	public VendedorService(VendedorRepository vendedorRepository) {
		this.vendedorRepository = vendedorRepository;
	}
	@Transactional
	public Vendedor save(Vendedor vendedorModel) {
		return vendedorRepository.save(vendedorModel);
	}

	public boolean existsByEmailVendedor(String email) {
		return vendedorRepository.existsByEmail(email);
	}

	public List<Vendedor> findAll() {
		return vendedorRepository.findAll();
	}

	public Optional<Vendedor> findById(Integer id) {
		return vendedorRepository.findById(id);
	}

	@Transactional
	public void delete(Vendedor vendedorModel) {
		vendedorRepository.delete(vendedorModel);
	}

}
