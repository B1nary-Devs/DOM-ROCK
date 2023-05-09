package com.api.painelvendas.services;

import com.api.painelvendas.dtos.HistoricoPostRequestDto;
import com.api.painelvendas.dtos.PredicaoPostRequestDto;
import com.api.painelvendas.models.Historico;
import com.api.painelvendas.models.Planejamento;
import com.api.painelvendas.models.Predicao;
import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.repositories.HistoricoRepository;
import com.api.painelvendas.repositories.PlanejamentoRepository;
import com.api.painelvendas.repositories.VendedorRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class HistoricoService {

    private final HistoricoRepository historicoRepository;
    private final PlanejamentoRepository planejamentoRepository;
    public HistoricoService(HistoricoRepository historicoRepository, PlanejamentoRepository planejamentoRepository) {
        this.historicoRepository = historicoRepository;
        this.planejamentoRepository = planejamentoRepository;
    }
    @Transactional
    public Historico save(HistoricoPostRequestDto historicoPostRequestDto){
        LocalDate dataAtual = LocalDate.now();
        Date dataSqlAtual = Date.valueOf(dataAtual);
        Optional<Planejamento> planejamento = planejamentoRepository.findById(historicoPostRequestDto.getIdPlanejamento());
        Historico historico = Historico.builder()
                .id(historicoPostRequestDto.getId())
                .quantidade(historicoPostRequestDto.getQuantidade())
                .dia(dataSqlAtual)
                .mes(historicoPostRequestDto.getMes())
                .planejamento(planejamento.orElse(null))
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
