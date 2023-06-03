package com.api.painelvendas.converters;

import com.api.painelvendas.dtos.ClienteGetDto;
import com.api.painelvendas.dtos.RegistroGetResquetDto;
import com.api.painelvendas.models.Cliente;
import com.api.painelvendas.models.Registro;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class ClienteConverter {
    public List<ClienteGetDto> convert(List<Cliente> clientes) {
        final List<ClienteGetDto> listaDtos = new ArrayList<>();
        for(Cliente c: clientes){
            listaDtos.add(
                    ClienteGetDto.builder()
                            .id(c.getId())
                            .email(c.getEmail())
                            .nome(c.getNome())
                            .idVendedor(c.getVendedor().getId())
                            .nomeVendedor(c.getVendedor().getNome())
                            .build()
            );
        }
        return listaDtos;

    }
}
