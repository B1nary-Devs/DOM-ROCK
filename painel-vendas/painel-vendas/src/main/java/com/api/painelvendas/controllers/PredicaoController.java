package com.api.painelvendas.controllers;

import com.api.painelvendas.dtos.PredicaoPostRequestDto;
import com.api.painelvendas.models.Predicao;
import com.api.painelvendas.services.PredicaoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/predicao")

public class PredicaoController {

    final PredicaoService predicaoService;

    public PredicaoController(PredicaoService predicaoService) {
        this.predicaoService = predicaoService;
    }

    @PostMapping
    public ResponseEntity<Object> savePredicao(@RequestBody @Valid PredicaoPostRequestDto predicaoPostRequestDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(predicaoService.save(predicaoPostRequestDto));
    }


    @GetMapping
    public ResponseEntity<List<Predicao>> getAllPredicao(){
        /*return ResponseEntity.status(HttpStatus.OK).body(
                predicaoConverter.convert(predicaoService.findAll())*/
        return ResponseEntity.status(HttpStatus.OK).body(predicaoService.findAll());
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Object> getOnePredicao(@PathVariable(value = "id") Integer id){
        Optional<Predicao> predicaoModelOptional = predicaoService.findById(id);
        if(!predicaoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Predição não encontrada!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(predicaoModelOptional.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePredicao(@PathVariable(value = "id")Integer id){
        Optional<Predicao> predicaoModelOptional = predicaoService.findById(id);
        if(!predicaoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Predição não encontrada!");
        }
        predicaoService.delete(predicaoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Predição excluída com sucesso!");
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updatearkingSpot(@PathVariable(value = "id") Integer id,
                                                   @RequestBody @Valid
                                                   PredicaoPostRequestDto
                                                           predicaoPostRequestDto){
        Optional<Predicao> predicaoModelOptional = predicaoService.findById(id);
        if(!predicaoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Predição não encontrada!");
        }

        predicaoPostRequestDto.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(predicaoService.save(predicaoPostRequestDto));
    }
}
