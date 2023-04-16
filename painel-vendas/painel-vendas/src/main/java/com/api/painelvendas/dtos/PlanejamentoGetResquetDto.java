package com.api.painelvendas.dtos;

import com.api.painelvendas.models.Cliente;
import com.api.painelvendas.models.RegistroPlanejamento;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@AllArgsConstructor
@Data
public class PlanejamentoGetResquetDto {
    @NotNull
    private Integer id;
    @NotNull
    private String nomeProduto;
    @NotNull
    private String nomeCliente;
    @NotNull
    private String nomeVendedor;
    @NotBlank
    private List<RegistroPlanejamento> registros;

}
