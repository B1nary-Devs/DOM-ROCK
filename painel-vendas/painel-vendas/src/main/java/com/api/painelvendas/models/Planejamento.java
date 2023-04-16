package com.api.painelvendas.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "Planejamento")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Planejamento{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_vendedor", nullable = false)
    private Vendedor vendedor;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_produto", nullable = false)
    private Produto produto;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_cliente", nullable = false)
    private Cliente cliente;

}
