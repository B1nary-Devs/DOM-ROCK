package com.api.painelvendas.dtos;

import jakarta.validation.constraints.NotBlank;

public class VendedorDto {

    @NotBlank
    private String nomeVendedor;
    @NotBlank
    private String emailVendedor;
    @NotBlank
    private String cpfVendedor;
    @NotBlank
    private String senhaVendedor;
    @NotBlank
    private String nivelAcees;

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
