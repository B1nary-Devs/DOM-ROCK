package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Builder
@AllArgsConstructor
@Data
public class RegistroPlanejamentoPostRequestDto {

    private Integer id;
    @NotNull
    private Double quantidade;
    @NotBlank
    private String diaRegisto;
    @NotBlank
    private String mesPlanejamento;
    @NotNull
    private Integer idPlanejamento;
}
