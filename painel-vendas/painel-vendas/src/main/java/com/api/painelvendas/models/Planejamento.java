package com.api.painelvendas.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table (name = "planejamento")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Planejamento{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_id_vendedor", nullable = false)
    private Vendedor vendedor;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_id_produto", nullable = false)
    private Produto produto;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_id_cliente", nullable = false)
    private Cliente cliente;
    @OneToMany(mappedBy = "planejamento", cascade = CascadeType.ALL, fetch = FetchType.LAZY,
            orphanRemoval = true)
    @JsonManagedReference
    private List<RegistroPlanejamento> registros;
}
