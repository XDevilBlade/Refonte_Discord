package com.rtaillandier.discord.controllers;

import java.util.ArrayList;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rtaillandier.discord.models.Utilisateurs;
import com.rtaillandier.discord.repositories.UtilisateursRepository;

import utilitaires.Identifiant;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ControllerUtilisateurs {

	@Autowired
	UtilisateursRepository utilisateursRepository;
	
	@GetMapping(value = "/utilisateurs")
	public Iterable<Utilisateurs> getAllUtilisateurs(){
		return utilisateursRepository.findAll();
	}
	
	@PutMapping(value = "/inscription")
	public ResponseEntity<String> inscription(@RequestBody Identifiant identifiant ) {
		String pseudo = identifiant.getPseudo();
		String mdp = identifiant.getMdp();
		Optional<Utilisateurs> utilisateur = utilisateursRepository.getUtilisateur(pseudo);
		if (utilisateur.isPresent()) {
			return new ResponseEntity<>("Ce pseudo a déjà été utilisé", HttpStatus.CONFLICT);
		}
		long nbUtilisateursInscrites = utilisateursRepository.count();
		//gestion de l'auto incrémentation
		if (nbUtilisateursInscrites == 0) {
			utilisateursRepository.save(new Utilisateurs(0, pseudo, mdp));
		} else {
			utilisateursRepository.save(new Utilisateurs((int)utilisateursRepository.count(), pseudo, mdp));
		}
		return new ResponseEntity<>("Votre nouveau compte a été enregistré", HttpStatus.OK);
	}	
	
	@GetMapping(value = "/authentification")
	public ResponseEntity<String> authentification(@RequestParam String pseudo, @RequestParam String mdp ) {
		Optional<Utilisateurs> utilisateur = utilisateursRepository.getUtilisateur(pseudo, mdp);
		if (utilisateur.isPresent()) {
			return new ResponseEntity<>("Authentification réussie", HttpStatus.OK);
		}
		return new ResponseEntity<>("Authentification échouée", HttpStatus.NOT_FOUND);
	}	
	
}
