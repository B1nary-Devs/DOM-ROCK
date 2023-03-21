package com.api.painelvendas.controllers;


import com.api.painelvendas.dtos.ProdutoDto;
import com.api.painelvendas.dtos.VendedorDto;
import com.api.painelvendas.models.ProdutoModel;
import com.api.painelvendas.models.VendedorModel;
import com.api.painelvendas.services.ProdutoService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/produto")
public class ProdutoController {

    final ProdutoService produtoService;


    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }


    @PostMapping
    public ResponseEntity<Object> saveProduto(@RequestBody @Valid ProdutoDto produtoDto) {
        var produtoModel = new ProdutoModel();
        BeanUtils.copyProperties(produtoDto, produtoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.save(produtoModel));
    }

    @GetMapping
    public ResponseEntity<List<ProdutoModel>> getAllProdutos() {
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneProduto(@PathVariable(value = "id") Integer id) {
        Optional<ProdutoModel> produtoModelOptional = produtoService.findById(id);
        if (!produtoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(produtoModelOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProduto(@PathVariable(value = "id") Integer id) {
        Optional<ProdutoModel> produtoModelOptional = produtoService.findById(id);
        if (!produtoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado!");
        }
        produtoService.delete(produtoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Vendedor deletado com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProduto(@PathVariable(value = "id") Integer id,
                                                    @RequestBody @Valid ProdutoDto produtoDto){
        Optional<ProdutoModel> produtoModelOptional = produtoService.findById(id);
        if (!produtoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado!");
        }
        var produtoModel = new ProdutoModel();
        BeanUtils.copyProperties(produtoDto, produtoModel);
        produtoModel.setIdProduto(produtoModelOptional.get().getIdProduto());
        return ResponseEntity.status(HttpStatus.OK).body(produtoService.save(produtoModel));
    }




}
