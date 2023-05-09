package com.api.painelvendas.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.util.Date;

@Entity
@Table
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Predicao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id;
    @Column(nullable = false, length = 50)
    private Double quantidade;
    @Column(nullable = false, length = 11)
    private Date dia;
    @Column(nullable = false, length = 50)
    private String mes;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_id_planejamento", nullable = false)
    @JsonBackReference
    private Planejamento planejamento;
}
