package com.api.painelvendas.services;

import com.api.painelvendas.dtos.PlanejamentoPostRequestDto;
import com.api.painelvendas.dtos.RegistroPlanejamentoPostRequestDto;
import com.api.painelvendas.models.*;
import com.api.painelvendas.repositories.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RegistroPlanejamentoService {
    private final RegistroPlanejamentoRepository registroPlanejamentoRepository;
    private final PlanejamentoRepository planejamentoRepository;
    @Transactional
    public RegistroPlanejamento save(RegistroPlanejamentoPostRequestDto registroPlanejamentoPostRequestDto) {
        Optional<Planejamento> planejamento = planejamentoRepository.findById(registroPlanejamentoPostRequestDto.getIdPlanejamento());
        RegistroPlanejamento registroPlanejamento = RegistroPlanejamento.builder()
                .id(registroPlanejamentoPostRequestDto.getId())
                .quantidade(registroPlanejamentoPostRequestDto.getQuantidade())
                .diaRegisto(registroPlanejamentoPostRequestDto.getDiaRegisto())
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
