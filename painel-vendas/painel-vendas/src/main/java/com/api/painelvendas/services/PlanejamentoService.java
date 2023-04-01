package com.api.painelvendas.services;

import com.api.painelvendas.dtos.PlanejamentoPostRequestDto;
import com.api.painelvendas.models.Cliente;
import com.api.painelvendas.models.Planejamento;
import com.api.painelvendas.models.Produto;
import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.ClienteRepository;
import com.api.painelvendas.repositories.PlanejamentoRepository;
import com.api.painelvendas.repositories.ProdutoRepository;
import com.api.painelvendas.repositories.VendedorRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PlanejamentoService {

    private final PlanejamentoRepository planejamentoRepository;
    private final ProdutoRepository produtoRepository;
    private final ClienteRepository clienteRepository;
    private final VendedorRepository vendedorRepository;

    @Transactional
    public Planejamento save(PlanejamentoPostRequestDto planejamentoDto) {
        Optional<Produto> produtoModel = produtoRepository.findById(planejamentoDto.getIdProduto());
        Optional<Cliente> cliente = clienteRepository.findById(planejamentoDto.getIdCliente());
        Optional<Vendedor> vendedorModel = vendedorRepository.findById(planejamentoDto.getIdVendedor());
        Planejamento planejamento = Planejamento.builder()
                .id(planejamentoDto.getId())
                .dia(planejamentoDto.getDia())
                .quantidade(planejamentoDto.getQuantidade())
                .produto(produtoModel.orElse(null))
                .cliente(cliente.orElse(null))
                .vendedor(vendedorModel.orElse(null))
                .build();
        return planejamentoRepository.save(planejamento);

    }

    public List<Planejamento> findAll() {
        return planejamentoRepository.findAll();
    }

    public Optional<Planejamento> findById(Integer id) {
        return planejamentoRepository.findById(id);
    }
    @Transactional
    public void delete(Planejamento planejamento) {
        planejamentoRepository.delete(planejamento);
    }
}
