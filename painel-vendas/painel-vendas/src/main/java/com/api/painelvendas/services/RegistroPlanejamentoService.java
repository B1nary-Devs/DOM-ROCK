package com.api.painelvendas.services;
import java.time.LocalDate;
import com.api.painelvendas.dtos.RegistroPlanejamentoPostRequestDto;
import com.api.painelvendas.models.*;
import com.api.painelvendas.repositories.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RegistroPlanejamentoService {
    private final RegistroPlanejamentoRepository registroPlanejamentoRepository;
    private final PlanejamentoRepository planejamentoRepository;
    @Transactional
    public RegistroPlanejamento save(RegistroPlanejamentoPostRequestDto registroPlanejamentoPostRequestDto) {
        //LocalDate dataAtual = LocalDate.now();
        //Date dataSqlAtual = Date.valueOf(dataAtual);
        Optional<Planejamento> planejamento = planejamentoRepository.findById(registroPlanejamentoPostRequestDto.getIdPlanejamento());
        RegistroPlanejamento registroPlanejamento = RegistroPlanejamento.builder()
                .id(registroPlanejamentoPostRequestDto.getId())
                .quantidade(registroPlanejamentoPostRequestDto.getQuantidade())
                .diaRegistro(registroPlanejamentoPostRequestDto.getDiaRegistro())
                .mesPlanejamento(registroPlanejamentoPostRequestDto.getMesPlanejamento())
                .planejamento(planejamento.orElse(null))
                .build();
        return registroPlanejamentoRepository.save(registroPlanejamento);
    }

    public List<RegistroPlanejamento> findAll() {
        return registroPlanejamentoRepository.findAll();
    }

    public Optional<RegistroPlanejamento> findById(Integer id) {
        return registroPlanejamentoRepository.findById(id);
    }
    @Transactional
    public void delete(RegistroPlanejamento registroPlanejamento) {
        registroPlanejamentoRepository.delete(registroPlanejamento);
    }
}
