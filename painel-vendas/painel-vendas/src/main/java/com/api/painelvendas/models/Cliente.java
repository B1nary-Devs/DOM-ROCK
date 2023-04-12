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
    @Column(nullable = false, length = 70)
    private String nome;
    @Column(nullable = false,unique = true, length = 50)
    private String email;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_vendedor", nullable = false)
    private Vendedor vendedor;

}
