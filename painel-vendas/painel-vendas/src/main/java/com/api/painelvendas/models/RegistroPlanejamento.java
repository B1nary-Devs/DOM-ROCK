package com.api.painelvendas.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    @Column(nullable = false,length = 11)
    private String diaRegisto;
    @Column(nullable = false,length = 11)
    private String mesPlanejamento;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_planejamento", nullable = false)
    private Planejamento planejamento;

}
