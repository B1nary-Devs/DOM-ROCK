package com.api.painelvendas.controllers;
import com.api.painelvendas.dtos.PlanejamentoDto;
import com.api.painelvendas.dtos.VendedorDto;
import com.api.painelvendas.models.Planejamento;
import com.api.painelvendas.models.VendedorModel;
import com.api.painelvendas.services.PlanejamentoService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/planejamento")

public class PlanejamentoController {


    final PlanejamentoService planejamentoService;


    public PlanejamentoController(PlanejamentoService planejamentoService) {
        this.planejamentoService = planejamentoService;
    }

    @PostMapping
    public ResponseEntity<Object> savePlanejamento(@RequestBody @Valid PlanejamentoDto planejamentoDto) {

        var planejamento = new Planejamento();
        BeanUtils.copyProperties(planejamentoDto, planejamento);
        return ResponseEntity.status(HttpStatus.CREATED).body(planejamentoService.save(planejamento));
    }


    @GetMapping
    public ResponseEntity<List<Planejamento>> getAllPlanejamento(){
        return ResponseEntity.status(HttpStatus.OK).body(planejamentoService.findAll());
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Object> getOnePlanejamento(@PathVariable(value = "id") Integer id){
        Optional<Planejamento> planejamentoModelOptional = planejamentoService.findById(id);
        if(!planejamentoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Planejamento não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(planejamentoModelOptional.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePlanejamento(@PathVariable(value = "id")Integer id){
        Optional<Planejamento> planejamentoModelOptional = planejamentoService.findById(id);
        if(!planejamentoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Planejamento não encontrado!");
        }
        planejamentoService.delete(planejamentoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Vendedor deletado com sucesso!");
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updatearkingSpot(@PathVariable(value = "id") Integer id,
                                                    @RequestBody @Valid PlanejamentoDto planejamentoDto){
        Optional<Planejamento> planejamentoModelOptional = planejamentoService.findById(id);
        if(!planejamentoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Planejamento não encontrado!");
        }
        var planejamento = new Planejamento();
        BeanUtils.copyProperties(planejamentoDto, planejamento);
        planejamento.setId(planejamentoModelOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(planejamentoService.save(planejamento));
    }
}


