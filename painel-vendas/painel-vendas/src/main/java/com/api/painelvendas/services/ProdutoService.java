package com.api.painelvendas.services;


import com.api.painelvendas.models.ProdutoModel;
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
    public ProdutoModel save(ProdutoModel produtoModel) {
        return produtoRepository.save(produtoModel);
    }

    public List<ProdutoModel> findAll() {
        return produtoRepository.findAll();
    }


    public Optional<ProdutoModel> findById(Integer id) {
        return produtoRepository.findById(id);
    }

    @Transactional
    public void delete(ProdutoModel produtoModel) {
        produtoRepository.delete(produtoModel);
    }
}
