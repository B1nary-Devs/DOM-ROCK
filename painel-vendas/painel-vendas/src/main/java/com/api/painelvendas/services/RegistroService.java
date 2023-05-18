package com.api.painelvendas.services;

import com.api.painelvendas.dtos.RegistroPostRequestDto;
import com.api.painelvendas.models.Cliente;
import com.api.painelvendas.models.Registro;
import com.api.painelvendas.models.Produto;
import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.ClienteRepository;
import com.api.painelvendas.repositories.RegistroRepository;
import com.api.painelvendas.repositories.ProdutoRepository;
import com.api.painelvendas.repositories.VendedorRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RegistroService {
    private final RegistroRepository registroRepository;
    private final ProdutoRepository produtoRepository;
    private final ClienteRepository clienteRepository;
    private final VendedorRepository vendedorRepository;

    @Transactional
    public Registro save(RegistroPostRequestDto registroPostRequestDto) {
        Optional<Produto> produto = produtoRepository.findById(registroPostRequestDto.getIdProduto());
        Optional<Cliente> cliente = clienteRepository.findById(registroPostRequestDto.getIdCliente());
        Optional<Vendedor> vendedor = vendedorRepository.findById(registroPostRequestDto.getIdVendedor());
        Registro registro = Registro.builder()
                .id(registroPostRequestDto.getId())
                .diaRegistro(registroPostRequestDto.getDiaRegistro())
                .produto(produto.orElse(null))
                .cliente(cliente.orElse(null))
                .vendedor(vendedor.orElse(null))
                .build();
        return registroRepository.save(registro);

    }

    public List<Registro> findAll() {
        return registroRepository.findAll();
    }

    public Optional<Registro> findById(Integer id) {
        return registroRepository.findById(id);
    }
    @Transactional
    public void delete(Registro registro) {
        registroRepository.delete(registro);
    }
}
