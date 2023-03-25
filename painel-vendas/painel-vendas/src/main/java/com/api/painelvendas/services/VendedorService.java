package com.api.painelvendas.services;


import org.springframework.stereotype.Service;

import com.api.painelvendas.models.VendedorModel;
import com.api.painelvendas.repositories.VendedorRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

@Service
public class VendedorService {
	
	final VendedorRepository vendedorRepository;
	
	public VendedorService(VendedorRepository vendedorRepository) {
		this.vendedorRepository = vendedorRepository;
	}
	@Transactional
	public VendedorModel save(VendedorModel vendedorModel) {
		return vendedorRepository.save(vendedorModel);
	}

	public boolean existsByEmailVendedor(String emailVendedor) {
		return vendedorRepository.existsByEmailVendedor(emailVendedor);
	}

	public boolean existsByCpfVendedor(String cpfVendedor) {
		return vendedorRepository.existsByCpfVendedor(cpfVendedor);
	}

	public List<VendedorModel> findAll() {
		return vendedorRepository.findAll();
	}

	public Optional<VendedorModel> findById(Integer id) {
		return vendedorRepository.findById(id);
	}

	@Transactional
	public void delete(VendedorModel vendedorModel) {
		vendedorRepository.delete(vendedorModel);
	}

}
