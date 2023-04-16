package com.api.painelvendas.services;

import com.api.painelvendas.dtos.ClienteDto;
import com.api.painelvendas.models.Cliente;
import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.ClienteRepository;
import com.api.painelvendas.repositories.VendedorRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {


    private final ClienteRepository clienteRepository;

    private final VendedorRepository vendedorRepository;


    public ClienteService(ClienteRepository clienteRepository, VendedorRepository vendedorRepository) {
        this.clienteRepository = clienteRepository;
        this.vendedorRepository = vendedorRepository;
    }

    @Transactional
    public Cliente save(ClienteDto clienteDto) {
        Optional<Vendedor> vendedor = vendedorRepository.findById(clienteDto.getIdVendedor());
        Cliente cliente = Cliente.builder()
                .id(clienteDto.getId())
                .nome(clienteDto.getNome())
                .email(clienteDto.getEmail())
                .vendedor(vendedor.orElse(null))
                .build();
        return clienteRepository.save(cliente);
    }

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> findById(Integer id) {
        return clienteRepository.findById(id);
    }
    @Transactional
    public void delete(Cliente cliente) {
        clienteRepository.delete(cliente);
    }
}
