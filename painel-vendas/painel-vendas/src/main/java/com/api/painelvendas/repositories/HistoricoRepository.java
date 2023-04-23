package com.api.painelvendas.repositories;

import com.api.painelvendas.models.Historico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricoRepository extends JpaRepository<Historico, Integer> {

}
