package com.api.painelvendas.controllers;

import com.api.painelvendas.dtos.HistoricoPostRequestDto;
import com.api.painelvendas.models.Historico;
import com.api.painelvendas.services.HistoricoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/historico")
public class HistoricoController {

    private final HistoricoService historicoService;

    public HistoricoController(HistoricoService historicoService) {
        this.historicoService = historicoService;
    }

    @PostMapping
    public ResponseEntity<Object> saveHistorico(@RequestBody @Valid HistoricoPostRequestDto historicoPostRequestDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(historicoService.save(historicoPostRequestDto));
    }

    @GetMapping
    public ResponseEntity<List<Historico>> getAllHistoricos() {
        return ResponseEntity.status(HttpStatus.OK).body(historicoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneHistorico(@PathVariable(value = "id") Integer id) {
        Optional<Historico> historicoModelOptional = historicoService.findById(id);
        if (!historicoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Historico não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(historicoModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteHistorico(@PathVariable(value = "id") Integer id) {
        Optional<Historico> historicoModelOptional = historicoService.findById(id);
        if (!historicoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Historico não encontrado!");
        }
        historicoService.delete(historicoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Historico deletado com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateHistorico(@PathVariable(value = "id") Integer id,
                                                  @RequestBody @Valid HistoricoPostRequestDto historicoPostRequestDto) {
        Optional<Historico> historicoModelOptional = historicoService.findById(id);
        if (!historicoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Historico não encontrado!");
        }
            historicoPostRequestDto.setId(id);
            return ResponseEntity.status(HttpStatus.OK).body(historicoService.save(historicoPostRequestDto));
        }

    }
