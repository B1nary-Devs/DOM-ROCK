package com.api.painelvendas.controllers;
import com.api.painelvendas.converters.RegistroConverter;
import com.api.painelvendas.dtos.RegistroGetResquetDto;
import com.api.painelvendas.dtos.RegistroPostRequestDto;
import com.api.painelvendas.models.Registro;
import com.api.painelvendas.services.RegistroService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/registro")

public class RegistroController {

    final RegistroService registroService;
    final RegistroConverter registroConverter;

    public RegistroController(RegistroService registroService, RegistroConverter registroConverter) {
        this.registroService = registroService;
        this.registroConverter = registroConverter;
    }

    @PostMapping
    public ResponseEntity<Object> saveRegistro(@RequestBody @Valid RegistroPostRequestDto registroPostRequestDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(registroService.save(registroPostRequestDto));
    }


    @GetMapping
    public ResponseEntity<List<RegistroGetResquetDto>> getAllRegistro(){
        return ResponseEntity.status(HttpStatus.OK).body(
                registroConverter.convert(registroService.findAll())
        );
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "*", maxAge = 3600)
    public  ResponseEntity<Object> getOneRegistro(@PathVariable(value = "id") Integer id){
        Optional<Registro> registroModelOptional = registroService.findById(id);
        if(!registroModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registro não encontrado!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(registroModelOptional.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteRegistro(@PathVariable(value = "id")Integer id){
        Optional<Registro> registroModelOptional = registroService.findById(id);
        if(!registroModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registro não encontrado!");
        }
        registroService.delete(registroModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Registro deletado com sucesso!");
    }


    @PutMapping("/{id}")
    public ResponseEntity<Object> updateRegistro(@PathVariable(value = "id") Integer id,
                                                    @RequestBody @Valid RegistroPostRequestDto registroPostRequestDto){
        Optional<Registro> registroModelOptional = registroService.findById(id);
        if(!registroModelOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Registro não encontrado!");
        }
        registroPostRequestDto.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(registroService.save(registroPostRequestDto));
    }
}


