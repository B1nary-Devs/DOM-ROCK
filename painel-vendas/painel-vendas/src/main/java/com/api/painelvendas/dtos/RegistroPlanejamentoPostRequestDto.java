package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@AllArgsConstructor
@Data
public class RegistroPlanejamentoPostRequestDto {

    private Integer id;
    @NotNull
    private Double quantidade;
    @NotBlank
    private Date diaRegisto;
    @NotBlank
    private String mesPlanejamento;
    @NotNull
    private Integer idPlanejamento;
}
