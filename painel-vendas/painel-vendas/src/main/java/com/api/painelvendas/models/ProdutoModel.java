package com.api.painelvendas.models;

import jakarta.persistence.*;

@Entity
@Table(name = "produto")

public class ProdutoModel {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idProduto;
    @Column(nullable = false, length = 60)
    private String nomeProduto;
    @Column(nullable = false, length = 15)
    private String tipoProduto;
	@Column(nullable = false, length = 20)
	private Double quantidadeProduto;

	public Integer getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(Integer idProduto) {
		this.idProduto = idProduto;
	}

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

