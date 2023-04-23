package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class VendedorPostRequestDto {
    private Integer id;
    @NotBlank
    private String nome;
    @NotBlank
    private String email;
    @NotBlank
    private String senha;
    @NotBlank
    private String nivelAcesso;

}
