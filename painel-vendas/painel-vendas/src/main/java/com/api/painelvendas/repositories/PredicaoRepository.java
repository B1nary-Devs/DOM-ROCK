package com.api.painelvendas.repositories;


import com.api.painelvendas.models.Predicao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PredicaoRepository extends JpaRepository<Predicao, Integer>{

}
