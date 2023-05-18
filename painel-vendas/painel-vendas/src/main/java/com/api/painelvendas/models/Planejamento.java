package com.api.painelvendas.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;


@Entity
@Table (name = "planejamento")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Planejamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 50)
    private Double quantidade;
    @Column(nullable = false)
    private LocalDate diaRegistro;
    @Column(nullable = false)
    private LocalDate mesPlanejamento;
    @ManyToOne
    @JoinColumn(name = "fk_id_registro", nullable = false)
    @JsonBackReference
    private Registro registro;

}
