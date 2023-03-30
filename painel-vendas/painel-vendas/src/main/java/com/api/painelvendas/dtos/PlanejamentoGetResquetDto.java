package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class PlanejamentoGetResquetDto {

    @NotNull
    private Integer id;
    @NotNull
    private Double quantidade;
    @NotNull
    private String dia;
    @NotNull
    private String nomeProduto;
    @NotNull
    private String nomeCliente;
}
