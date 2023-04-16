package com.api.painelvendas.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "produto")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Produto {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false, length = 60)
    private String nome;
    @Column(nullable = false, length = 15)
    private String tipo;

}

