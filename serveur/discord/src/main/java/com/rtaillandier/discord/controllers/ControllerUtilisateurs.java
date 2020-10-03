package com.rtaillandier.discord.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rtaillandier.discord.models.Utilisateurs;
import com.rtaillandier.discord.repositories.UtilisateursRepository;

@CrossOrigin
@RestController
public class ControllerUtilisateurs {

	@Autowired
	UtilisateursRepository utilisateursRepository;
	
	@GetMapping(value = "/Utilisateurs")
	public Iterable<Utilisateurs> getAllUtilisateurs(){
		return utilisateursRepository.findAll();
	}
	
	
	
}
