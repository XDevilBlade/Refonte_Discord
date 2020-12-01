package com.rtaillandier.discord.components;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
public class StoreUUID {
	
	private final ArrayList<UUID> listSessionsID = new ArrayList<UUID>();
	
	public ArrayList<UUID> getListSessionsID(){
		return listSessionsID;
	}
	
	public void addSessionID(UUID sessionID) {
		listSessionsID.add(sessionID);
	}
	
}
