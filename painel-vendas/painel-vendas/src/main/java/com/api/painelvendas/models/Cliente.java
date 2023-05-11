package com.api.painelvendas.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "cliente")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false, length = 70)
    private String nome;
    @Column(nullable = false,unique = true, length = 50)
    private String email;
    @ManyToOne
    @JoinColumn(name = "fk_id_vendedor", nullable = false)
    @JsonBackReference
    private Vendedor vendedor;

}
