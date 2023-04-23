package com.api.painelvendas.dtos;

import jakarta.persistence.Column;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Builder
@AllArgsConstructor
@Data
public class ProdutoDto {

    private Integer id;
    @NotBlank
    private String nome;
    @NotBlank
    private String tipo;


}

