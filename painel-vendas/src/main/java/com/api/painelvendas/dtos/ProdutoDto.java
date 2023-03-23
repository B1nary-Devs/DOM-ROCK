package com.api.painelvendas.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ProdutoDto {

    @NotBlank
    private String nomeProduto;
    @NotBlank
    private String tipoProduto;
    @NotNull
    private Double quantidadeProduto;

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getTipoProduto() {
        return tipoProduto;
    }

    public void setTipoProduto(String tipoProduto) {
        this.tipoProduto = tipoProduto;
    }

    public Double getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(Double quantidadeProduto) {
        this.quantidadeProduto = quantidadeProduto;
    }
}

