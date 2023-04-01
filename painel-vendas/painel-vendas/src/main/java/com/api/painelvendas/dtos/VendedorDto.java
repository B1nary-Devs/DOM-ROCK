package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VendedorDto {

    @NotBlank
    private String nomeVendedor;
    @NotBlank
    private String emailVendedor;
    @NotBlank
    private String cpfVendedor;
    @NotBlank
    private String senhaVendedor;
    @NotBlank
    private String nivelAcesso;

}
