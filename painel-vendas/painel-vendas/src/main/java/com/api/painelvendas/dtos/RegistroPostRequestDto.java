package com.api.painelvendas.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@AllArgsConstructor
@Data
public class RegistroPostRequestDto {
    private Integer id;
    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate diaRegistro;
    @NotNull
    private Integer idVendedor;
    @NotNull
    private Integer idProduto;
    @NotNull
    private Integer idCliente;
}

