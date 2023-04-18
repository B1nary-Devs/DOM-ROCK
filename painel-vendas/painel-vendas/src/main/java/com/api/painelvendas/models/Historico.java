package com.api.painelvendas.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "historico")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Historico {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false, length = 30)
    private String faturalmentoReal;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_id_vendedor", nullable = false)
    @JsonBackReference
    private Vendedor vendedor;
}
