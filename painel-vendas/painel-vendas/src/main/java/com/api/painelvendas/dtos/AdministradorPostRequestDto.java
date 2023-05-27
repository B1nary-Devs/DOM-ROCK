package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class AdministradorPostRequestDto {
    private Integer id;
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String nivelAcesso;

}
