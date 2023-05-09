package com.api.painelvendas.dtos;

import com.api.painelvendas.models.Vendedor;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

@Builder
@AllArgsConstructor
@Data
public class HistoricoPostRequestDto {
    private Integer id;
    @NotNull
    private Double quantidade;
    private Date dia;
    @NotBlank
    private String mes;
    @NotNull
    private Integer idPlanejamento;
}
