package com.api.painelvendas.converters;

import com.api.painelvendas.dtos.RegistroGetResquetDto;
import com.api.painelvendas.models.Registro;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
//esse converter serve para geral ou somente pro get
// como eu faço pra filtra as entidades do onetomany pois vai vira uma bola de neve
@Component
public class RegistroConverter {
    public List<RegistroGetResquetDto> convert(List<Registro> registros){
        final List<RegistroGetResquetDto> listaDtos = new ArrayList<>();
        for(Registro r: registros){
            listaDtos.add(
                    RegistroGetResquetDto.builder()
                            .id(r.getId())
                            .nomeCliente(r.getCliente().getNome())
                            .nomeProduto(r.getProduto().getNome())
                            .nomeVendedor(r.getVendedor().getNome())
                            .planejamentos(r.getPlanejamentos())
                            .historicos(r.getHistoricos())
                            .predicaos(r.getPredicaos())
                            .build()
            );
        }
        return listaDtos;
    }





}
