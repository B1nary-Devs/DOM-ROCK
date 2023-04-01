package com.api.painelvendas.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "vendedor")
@Data
public class Vendedor {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idVendedor;
    @Column(nullable = false, length = 50)
	private String nomeVendedor;
    @Column(nullable = false,unique = true, length = 50)
    private String emailVendedor;
	@Column(nullable = false,unique = true, length = 14)
	private String cpfVendedor;
    @Column(nullable = false,length = 250)
    private String senhaVendedor;
    @Column(nullable = false,length = 15)
    private String nivelAcesso;

}
