package com.api.painelvendas.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "vendedor")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vendedor {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 50)
	private String nome;
    @Column(nullable = false,unique = true, length = 50)
    private String email;
    @Column(nullable = false,length = 250)
    private String password;
    @Column(nullable = false,length = 15)
    private String nivelAcesso;
    @OneToMany(mappedBy = "vendedor", cascade = CascadeType.ALL, fetch = FetchType.LAZY,
    orphanRemoval = true)
    @JsonManagedReference
    private List<Cliente> clientes;

    @OneToMany(mappedBy = "vendedor", cascade = CascadeType.ALL, fetch = FetchType.LAZY,
            orphanRemoval = true)
    @JsonManagedReference
    private List<Planejamento> planejamentos;

}
