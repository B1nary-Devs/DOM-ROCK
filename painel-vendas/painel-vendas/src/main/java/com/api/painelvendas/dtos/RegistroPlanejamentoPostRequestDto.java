package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

@Builder
@AllArgsConstructor
@Data
public class RegistroPlanejamentoPostRequestDto {

    private Integer id;
    @NotNull
    private Double quantidade;
    private Date diaRegistro;
    @NotBlank
    private String mesPlanejamento;
    @NotNull
    private Integer idPlanejamento;
}
