package com.api.painelvendas.converters;

import com.api.painelvendas.dtos.PlanejamentoGetResquetDto;
import com.api.painelvendas.models.Planejamento;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PlanejamentoConverter {



    public List<PlanejamentoGetResquetDto> convert(List<Planejamento> planejamentos){
        final List<PlanejamentoGetResquetDto> listaDtos = new ArrayList<>();
        for(Planejamento p:planejamentos){
            listaDtos.add(
                    PlanejamentoGetResquetDto.builder()
                            .id(p.getId())
                            .dia(p.getDia())
                            .quantidade(p.getQuantidade())
                            .nomeCliente(p.getCliente().getNome())
                            .nomeProduto(p.getProduto().getNomeProduto())
                            .build()
            );
        }
        return listaDtos;
    }




}
