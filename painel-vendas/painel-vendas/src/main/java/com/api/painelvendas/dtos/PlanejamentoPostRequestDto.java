package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Builder
@AllArgsConstructor
@Data
public class PlanejamentoPostRequestDto {
    private Integer id;
    @NotNull
    private Integer idVendedor;
    @NotNull
    private Integer idProduto;
    @NotNull
    private Integer idCliente;
}

