package com.api.painelvendas.dtos;

import com.api.painelvendas.models.Historico;
import com.api.painelvendas.models.Planejamento;
import com.api.painelvendas.models.Predicao;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Builder
@AllArgsConstructor
@Data
public class RegistroGetResquetDto {
    @NotNull
    private Integer id;
    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate diaRegistro;
    @NotNull
    private String nomeProduto;
    @NotNull
    private String nomeCliente;
    @NotNull
    private String nomeVendedor;
    @NotBlank
    private List<Planejamento> planejamentos;
    @NotBlank
    private List<Historico> historicos;
    @NotBlank
    private List<Predicao> predicaos;

}
