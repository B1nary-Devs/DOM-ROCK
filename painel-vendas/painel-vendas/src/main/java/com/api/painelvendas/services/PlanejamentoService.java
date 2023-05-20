package com.api.painelvendas.services;
import com.api.painelvendas.dtos.PlanejamentoPostRequestDto;
import com.api.painelvendas.models.*;
import com.api.painelvendas.repositories.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PlanejamentoService {
    private final PlanejamentoRepository planejamentoRepository;
    private final RegistroRepository registroRepository;
    @Transactional
    public Planejamento save(PlanejamentoPostRequestDto planejamentoPostRequestDto) {
        //LocalDate dataAtual = LocalDate.now();
        //Date dataSqlAtual = Date.valueOf(dataAtual);
        Optional<Registro> registro = registroRepository.findById(planejamentoPostRequestDto.getIdRegistro());
        Planejamento planejamento = Planejamento.builder()
                .id(planejamentoPostRequestDto.getId())
                .quantidade(planejamentoPostRequestDto.getQuantidade())
                .diaRegistro(planejamentoPostRequestDto.getDiaRegistro())
                .mesPlanejamento(planejamentoPostRequestDto.getMesPlanejamento())
                .registro(registro.orElse(null))
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
