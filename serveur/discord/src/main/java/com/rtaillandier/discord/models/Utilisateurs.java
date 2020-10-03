package com.rtaillandier.discord.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "UTILISATEURS")
public class Utilisateurs implements Serializable{
	@Id
	@Column(name = "id", nullable = false)
	private Integer _id;
	
    @Column(name = "PSEUDO", nullable = false)
	private String _pseudo;
    
    @Column(name = "MDP", nullable = false)
    private String _mdp;
    
    public Utilisateurs() {

	}

    public Utilisateurs(Integer id) {
		_id = id;
	}
    
	public Utilisateurs(Integer id, String pseudo, String mdp) {
		_id = id;
		_pseudo = pseudo;
		_mdp = mdp;
	}

	public int get_id() {
		return _id;
	}

	public void set_id(Integer _id) {
		this._id = _id;
	}

	public String get_pseudo() {
		return _pseudo;
	}

	public void set_pseudo(String _pseudo) {
		this._pseudo = _pseudo;
	}

	public String get_mdp() {
		return _mdp;
	}

	public void set_mdp(String _mdp) {
		this._mdp = _mdp;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + _id;
		result = prime * result + ((_mdp == null) ? 0 : _mdp.hashCode());
		result = prime * result + ((_pseudo == null) ? 0 : _pseudo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Utilisateurs other = (Utilisateurs) obj;
		if (_id != other._id)
			return false;
		if (_mdp == null) {
			if (other._mdp != null)
				return false;
		} else if (!_mdp.equals(other._mdp))
			return false;
		if (_pseudo == null) {
			if (other._pseudo != null)
				return false;
		} else if (!_pseudo.equals(other._pseudo))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Utilisateurs [_id=" + _id + ", _pseudo=" + _pseudo + ", _mdp=" + _mdp + "]";
	}	
	
}
