package com.api.painelvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.api.painelvendas.models.Vendedor;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor, Integer>{

    public boolean existsByEmail(String email);
    public boolean existsBySenha(String senha);

    Vendedor findByEmailAndSenha(String email, String senha);
//    @Query("SELECT new VendedorGetResquestDto(c))

//    @Query("SELECT new com.javatechie.jpa.dto.OrderResponse(c.name , p.productName) FROM Customer c JOIN c.products p")
//    public List<OrderResponse> getJoinInformation();

}
