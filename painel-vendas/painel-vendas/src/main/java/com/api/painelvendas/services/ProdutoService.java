package com.api.painelvendas.services;


import com.api.painelvendas.models.Produto;
import com.api.painelvendas.repositories.ProdutoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {


    final ProdutoRepository produtoRepository;


    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    @Transactional
    public Produto save(Produto produtoModel) {
        return produtoRepository.save(produtoModel);
    }

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }


    public Optional<Produto> findById(Integer id) {
        return produtoRepository.findById(id);
    }

    @Transactional
    public void delete(Produto produtoModel) {
        produtoRepository.delete(produtoModel);
    }
}
