package com.api.painelvendas.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Table (name = "registro_planejamento")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistroPlanejamento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false, length = 50)
    private Double quantidade;
    @Column(nullable = false)
    private Date diaRegistro;
    @Column(nullable = false)
    private String mesPlanejamento;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_id_planejamento", nullable = false)
    @JsonBackReference
    private Planejamento planejamento;

}
