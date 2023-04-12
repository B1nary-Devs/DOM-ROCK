package com.api.painelvendas.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "vendedor")
@Data
public class Vendedor {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false, length = 50)
	private String nome;
    @Column(nullable = false,unique = true, length = 50)
    private String email;
    @Column(nullable = false,length = 250)
    private String senha;
    @Column(nullable = false,length = 15)
    private String nivelAcesso;
    @OneToMany(mappedBy = "vendedor", cascade = CascadeType.ALL, fetch = FetchType.LAZY,
    orphanRemoval = true)
    private List<Cliente> clientes;

}
