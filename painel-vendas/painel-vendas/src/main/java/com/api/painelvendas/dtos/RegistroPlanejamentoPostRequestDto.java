package com.api.painelvendas.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

@Builder
@AllArgsConstructor
@Data
public class RegistroPlanejamentoPostRequestDto {

    private Integer id;
    @NotNull
    private Double quantidade;

    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date diaRegistro;
    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date mesPlanejamento;
    @NotNull
    private Integer idPlanejamento;
}
