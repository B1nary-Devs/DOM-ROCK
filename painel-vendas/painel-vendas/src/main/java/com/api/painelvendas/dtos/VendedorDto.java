package com.api.painelvendas.dtos;

import com.api.painelvendas.models.Cliente;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@AllArgsConstructor
@Data
public class VendedorDto {

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
