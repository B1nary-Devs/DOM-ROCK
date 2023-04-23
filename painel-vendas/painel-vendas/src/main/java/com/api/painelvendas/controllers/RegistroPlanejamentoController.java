package com.api.painelvendas.controllers;
import com.api.painelvendas.dtos.RegistroPlanejamentoPostRequestDto;
import com.api.painelvendas.models.RegistroPlanejamento;
import com.api.painelvendas.services.RegistroPlanejamentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/registro_planejamento")

public class RegistroPlanejamentoController {

    final RegistroPlanejamentoService registroPlanejamentoService;

    public RegistroPlanejamentoController(RegistroPlanejamentoService registroPlanejamentoService) {
        this.registroPlanejamentoService = registroPlanejamentoService;
    }

    @PostMapping
    public ResponseEntity<Object> saveRegistroPlanejamento(@RequestBody @Valid RegistroPlanejamentoPostRequestDto registroPlanejamentoPostRequestDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(registroPlanejamentoService.save(registroPlanejamentoPostRequestDto));
    }


    @GetMapping
    public ResponseEntity<List<RegistroPlanejamento>> getAllRegistroPlanejamento(){
        /*return ResponseEntity.status(HttpStatus.OK).body(
                registroPlanejamentoConverter.convert(registroPlanejamentoService.findAll())*/
        return ResponseEntity.status(HttpStatus.OK).body(registroPlanejamentoService.findAll());
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Object> getOneRegistroPlanejamento(@PathVariable(value = "id") Integer id){
        Optional<RegistroPlanejamento> registroPlanejamentoModelOptional = registroPlanejamentoService.findById(id);
        if(!registroPlanejamentoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registro de planejamento não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(registroPlanejamentoModelOptional.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteRegistroPlanejamento(@PathVariable(value = "id")Integer id){
        Optional<RegistroPlanejamento> registroPlanejamentoModelOptional = registroPlanejamentoService.findById(id);
        if(!registroPlanejamentoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registro de planejamento não encontrado!");
        }
        registroPlanejamentoService.delete(registroPlanejamentoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Registro de planejamento com sucesso!");
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updatearkingSpot(@PathVariable(value = "id") Integer id,
                                                    @RequestBody @Valid
                                                    RegistroPlanejamentoPostRequestDto
                                                            registroPlanejamentoPostRequestDto){
        Optional<RegistroPlanejamento> registroPlanejamentoModelOptional = registroPlanejamentoService.findById(id);
        if(!registroPlanejamentoModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registro de planejamento não encontrado!");
        }

        registroPlanejamentoPostRequestDto.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(registroPlanejamentoService.save(registroPlanejamentoPostRequestDto));
    }
}


