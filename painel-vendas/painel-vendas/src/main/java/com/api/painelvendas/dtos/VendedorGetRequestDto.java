package com.api.painelvendas.dtos;

import com.api.painelvendas.models.Cliente;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;
@Builder
@AllArgsConstructor
@Data
public class VendedorGetRequestDto {
    @NotNull
    private Integer id;
    @NotBlank
    private String nome;
    @NotBlank
    private String email;
    @NotBlank
    private String senha;
    @NotBlank
    private String nivelAcesso;
    @NotBlank
    private List<Cliente> clientes;

}



