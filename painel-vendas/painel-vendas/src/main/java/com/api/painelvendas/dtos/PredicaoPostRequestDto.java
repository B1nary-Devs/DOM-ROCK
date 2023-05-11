package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Builder
@AllArgsConstructor
@Data
public class PredicaoPostRequestDto {
    private Integer id;
    @NotNull
    private Double quantidade;
    private Date dia;
    @NotBlank
    private Date mes;
    @NotNull
    private Integer idPlanejamento;
}
