package com.api.painelvendas.repositories;
import com.api.painelvendas.models.RegistroPlanejamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroPlanejamentoRepository extends JpaRepository<RegistroPlanejamento,Integer> {

}
