package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PlanejamentoPostRequestDto {
    private Integer id;
    @NotNull
    private Double quantidade;
    @NotNull
    private String dia;
    @NotNull
    private Integer idVendedor;
    @NotNull
    private Integer idProduto;
    @NotNull
    private Integer idCliente;
}

