package com.api.painelvendas.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;

public class ProdutoDto {

    @NotBlank
    private String nomeProduto;
    @NotBlank
    private String tipoProduto;
    @NotBlank
    private Double quantidadeProduto;

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getTipoVendedor() {
        return tipoProduto;
    }

    public void setTipoVendedor(String tipoVendedor) {
        this.tipoProduto = tipoVendedor;
    }

    public Double getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(Double quantidadeProduto) {
        this.quantidadeProduto = quantidadeProduto;
    }
}
