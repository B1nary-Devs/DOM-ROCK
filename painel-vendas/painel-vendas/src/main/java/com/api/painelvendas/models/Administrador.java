package com.api.painelvendas.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "administrador")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Administrador {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,unique = true, length = 50)
    private String email;

    @Column(nullable = false,length = 250)
    private String password;

    @Column(nullable = false,length = 15)
    private String nivelAcesso;





}
