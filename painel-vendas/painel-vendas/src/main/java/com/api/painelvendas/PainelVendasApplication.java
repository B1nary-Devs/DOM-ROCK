package com.api.painelvendas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class PainelVendasApplication {

	public static void main(String[] args) { SpringApplication.run(PainelVendasApplication.class, args);}

	@GetMapping("/")
	public String index(){
		return "Ola Mundão Baum!";
	}

}

