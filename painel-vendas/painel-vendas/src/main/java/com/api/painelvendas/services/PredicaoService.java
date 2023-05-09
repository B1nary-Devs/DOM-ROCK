package com.api.painelvendas.services;

import com.api.painelvendas.models.Planejamento;
import com.api.painelvendas.models.Predicao;
import com.api.painelvendas.repositories.PlanejamentoRepository;
import com.api.painelvendas.repositories.PredicaoRepository;
import com.api.painelvendas.dtos.PredicaoPostRequestDto;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PredicaoService {
    private final PredicaoRepository predicaoRepository;
    private final PlanejamentoRepository planejamentoRepository;

    @Transactional
    public Predicao save(PredicaoPostRequestDto predicaoPostRequestDto){
        LocalDate dataAtual = LocalDate.now();
        Date dataSqlAtual = Date.valueOf(dataAtual);
        Optional<Planejamento> planejamento = planejamentoRepository.findById(predicaoPostRequestDto.getIdPlanejamento());
        Predicao predicao = Predicao.builder()
                .id(predicaoPostRequestDto.getId())
                .quantidade(predicaoPostRequestDto.getQuantidade())
                .dia(dataSqlAtual)
                .mes(predicaoPostRequestDto.getMes())
                .planejamento(planejamento.orElse(null))
                .build();
        return predicaoRepository.save(predicao);
    }

    public List<Predicao> findAll() {return predicaoRepository.findAll();
    }

    public Optional<Predicao> findById(Integer id) {
        return predicaoRepository.findById(id);
    }
    @Transactional
    public void delete(Predicao predicao) {
        predicaoRepository.delete(predicao);
    }
}


