package com.api.painelvendas.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Builder
@AllArgsConstructor
@Data
public class VendedorLoginDto {
    private Integer id;
    @NotBlank
    private String email;
    @NotBlank
    private String senha;

}