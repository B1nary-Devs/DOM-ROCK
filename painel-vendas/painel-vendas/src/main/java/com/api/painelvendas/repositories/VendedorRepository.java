package com.api.painelvendas.repositories;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import com.api.painelvendas.models.Vendedor;

import java.util.function.Function;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor, Integer>{


   Vendedor findByEmailAndPassword(String email, String password);


   boolean existsByEmail(String email);


}
