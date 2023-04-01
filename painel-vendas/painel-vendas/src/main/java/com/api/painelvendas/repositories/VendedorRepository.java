package com.api.painelvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.painelvendas.models.Vendedor;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor, Integer>{

    public boolean existsByEmailVendedor(String emailVendedor);

    public boolean existsByCpfVendedor(String cpfVendedor);

}
