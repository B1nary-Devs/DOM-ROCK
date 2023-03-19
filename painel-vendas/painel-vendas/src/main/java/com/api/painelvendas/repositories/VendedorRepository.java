package com.api.painelvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.painelvendas.models.VendedorModel;

@Repository
public interface VendedorRepository extends JpaRepository<VendedorModel, Integer>{

    public boolean existsByEmailVendedor(String emailVendedor);

}
