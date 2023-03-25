package com.api.painelvendas.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vendedor")

public class VendedorModel {
	
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
    private String nivelAcees;
	
    
    public Integer getIdVendedor() {
		return idVendedor;
	}
	public void setIdVendedor(Integer idVendedor) {
		this.idVendedor = idVendedor;
	}
	public String getNomeVendedor() {
		return nomeVendedor;
	}
	public void setNomeVendedor(String nomeVendedor) {
		this.nomeVendedor = nomeVendedor;
	}
	public String getEmailVendedor() {
		return emailVendedor;
	}
	public void setEmailVendedor(String emailVendedor) {
		this.emailVendedor = emailVendedor;
	}
	public String getSenhaVendedor() {
		return senhaVendedor;
	}
	public void setSenhaVendedor(String senhaVendedor) {
		this.senhaVendedor = senhaVendedor;
	}
	public String getNivelAcees() {
		return nivelAcees;
	}
	public void setNivelAcees(String nivelAcees) {
		this.nivelAcees = nivelAcees;
	}
	public String getCpfVendedor() {
		return cpfVendedor;
	}
	public void setCpfVendedor(String cpfVendedor) {
		this.cpfVendedor = cpfVendedor;
	}
}
