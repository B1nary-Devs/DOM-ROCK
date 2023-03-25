package com.api.painelvendas.services;

import com.api.painelvendas.models.Planejamento;
import com.api.painelvendas.repositories.PlanejamentoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanejamentoService {

    final PlanejamentoRepository planejamentoRepository;

    public PlanejamentoService(PlanejamentoRepository planejamentoRepository) {
        this.planejamentoRepository = planejamentoRepository;
    }

    @Transactional
    public Planejamento save(Planejamento planejamento) {
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
