package com.api.painelvendas.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "produto")
@Data
public class Produto {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idProduto;
    @Column(nullable = false, length = 60)
    private String nomeProduto;
    @Column(nullable = false, length = 15)
    private String tipoProduto;
	@Column(nullable = false, length = 20)
	private Double quantidadeProduto;

}

