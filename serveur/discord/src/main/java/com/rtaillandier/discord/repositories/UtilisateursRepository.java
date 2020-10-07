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
	
	@Query("select u from Utilisateurs u where u._pseudo= :pseudo")
	public Optional<Utilisateurs> getUtilisateur(@Param("pseudo") String pseudo);
	
	@Query("select u from Utilisateurs u where u._pseudo= :pseudo and u._mdp= :mdp")
	public Optional<Utilisateurs> getUtilisateur(@Param("pseudo") String pseudo, @Param("mdp") String mdp);
	
	public <S extends Utilisateurs> S save(S entity);
	
	public long count();
	
}
