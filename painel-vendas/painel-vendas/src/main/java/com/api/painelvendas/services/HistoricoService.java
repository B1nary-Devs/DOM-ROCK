package com.api.painelvendas.services;

import com.api.painelvendas.dtos.HistoricoPostRequestDto;
import com.api.painelvendas.models.Historico;
import com.api.painelvendas.models.Registro;
import com.api.painelvendas.repositories.HistoricoRepository;
import com.api.painelvendas.repositories.RegistroRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class HistoricoService {

    private final HistoricoRepository historicoRepository;
    private final RegistroRepository registroRepository;
    public HistoricoService(HistoricoRepository historicoRepository, RegistroRepository registroRepository) {
        this.historicoRepository = historicoRepository;
        this.registroRepository = registroRepository;
    }
    @Transactional
    public Historico save(HistoricoPostRequestDto historicoPostRequestDto){
        LocalDate dataAtual = LocalDate.now();
        Date dataSqlAtual = Date.valueOf(dataAtual);
        Optional<Registro> planejamento = registroRepository.findById(historicoPostRequestDto.getIdPlanejamento());
        Historico historico = Historico.builder()
                .id(historicoPostRequestDto.getId())
                .quantidade(historicoPostRequestDto.getQuantidade())
                .dia(dataSqlAtual)
                .mes(historicoPostRequestDto.getMes())
                .registro(planejamento.orElse(null))
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
