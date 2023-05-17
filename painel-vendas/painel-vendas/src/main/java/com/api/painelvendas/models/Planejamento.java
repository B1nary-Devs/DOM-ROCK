package com.api.painelvendas.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table (name = "planejamento", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"fk_id_vendedor", "fk_id_produto", "fk_id_cliente"})
})
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Planejamento{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "fk_id_vendedor", nullable = false)
    @JsonBackReference
    private Vendedor vendedor;
    @ManyToOne
    @JoinColumn(name = "fk_id_produto", nullable = false)
    private Produto produto;
    @ManyToOne
    @JoinColumn(name = "fk_id_cliente", nullable = false)
    private Cliente cliente;
    @OneToMany(mappedBy = "planejamento", cascade = CascadeType.ALL, fetch = FetchType.LAZY,
            orphanRemoval = true)
    @JsonManagedReference
    private List<RegistroPlanejamento> registros;

    @OneToMany(mappedBy = "planejamento", cascade = CascadeType.ALL, fetch = FetchType.LAZY,
            orphanRemoval = true)
    @JsonManagedReference
    private List<Historico> historicos;

    @OneToMany(mappedBy = "planejamento", cascade = CascadeType.ALL, fetch = FetchType.LAZY,
            orphanRemoval = true)
    @JsonManagedReference
    private List<Predicao> predicaos;
}
