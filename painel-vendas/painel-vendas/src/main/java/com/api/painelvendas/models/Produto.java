package com.api.painelvendas.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "produto")
@Data
public class Produto {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false, length = 60)
    private String nome;
    @Column(nullable = false, length = 15)
    private String tipo;

}

