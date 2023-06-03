package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class ClienteGetDto {

    private Integer id;
    @NotBlank
    private String email;
    @NotBlank
    private String nome;
    @NotNull
    private Integer idVendedor;
    @NotNull
    private String nomeVendedor;


}
