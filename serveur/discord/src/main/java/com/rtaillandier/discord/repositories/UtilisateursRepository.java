package com.rtaillandier.discord.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rtaillandier.discord.models.Utilisateurs;

@Repository
public interface UtilisateursRepository extends CrudRepository<Utilisateurs, Integer>{	
	public Iterable<Utilisateurs> findAll();
	
	@Query("select * from Utilisateurs u where u._pseudo=?")
	public Utilisateurs getUtilisateurs(String pseudo);
	
	@Query("select * from Utilisateurs u where u._pseudo=? and u._mdp=?")
	public Utilisateurs getUtilisateurs(String pseudo, String mdp);
	
}
