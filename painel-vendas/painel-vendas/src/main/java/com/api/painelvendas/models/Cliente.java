package com.api.painelvendas.models;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table (name = "cliente")
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false,unique = true, length = 14)
    private String cpf;
    @Column(nullable = false,unique = true, length = 70)
    private String nome;
    @Column(nullable = false,unique = true, length = 50)
    private String email;
    @Column(nullable = false, length = 20)
    private Integer idVendedor;

}
