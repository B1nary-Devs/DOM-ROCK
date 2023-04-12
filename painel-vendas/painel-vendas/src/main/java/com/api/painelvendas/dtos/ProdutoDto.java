package com.api.painelvendas.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Builder
@AllArgsConstructor
@Data
public class ProdutoDto {

    @NotBlank
    private String nome;
    @NotBlank
    private String tipo;
    @NotNull
    private Double quantidade;

}

