package com.api.painelvendas.services;

import com.api.painelvendas.dtos.HistoricoPostRequestDto;
import com.api.painelvendas.models.Historico;
import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.HistoricoRepository;
import com.api.painelvendas.repositories.VendedorRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoricoService {

    private final HistoricoRepository historicoRepository;
    private final VendedorRepository vendedorRepository;
    public HistoricoService(HistoricoRepository historicoRepository, VendedorRepository vendedorRepository) {
        this.historicoRepository = historicoRepository;
        this.vendedorRepository = vendedorRepository;
    }
    @Transactional
    public Object save(HistoricoPostRequestDto historicoPostRequestDto) {
        Optional<Vendedor> vendedor = vendedorRepository.findById(historicoPostRequestDto.getIdVendedor());
        Historico historico = Historico.builder()
                .id(historicoPostRequestDto.getId())
                .faturalmentoReal(historicoPostRequestDto.getFaturalmentoReal())
                .vendedor(vendedor.orElse(null))
                .build();
        return historicoRepository.save(historico);
    }

    public List<Historico> findAll() {
        return historicoRepository.findAll();
    }

    public Optional<Historico> findById(Integer id) {
        return historicoRepository.findById(id);
    }

    public void delete(Historico historico) {
        historicoRepository.delete(historico);
    }
}
