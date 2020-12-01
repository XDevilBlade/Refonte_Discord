package com.rtaillandier.discord.handshakehandler;

import java.security.Principal;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import com.rtaillandier.discord.components.StoreUUID;
import com.rtaillandier.discord.principal.StompPrincipal;

@Component
public class CustomHandshakeHandler extends DefaultHandshakeHandler{
	
	@Autowired
	StoreUUID storeUUID;
	
	@Override
    protected Principal determineUser(ServerHttpRequest request,
                                      WebSocketHandler wsHandler,
                                      Map<String, Object> attributes) {
		System.out.println("je suis dans la méthode determineUser");
		UUID randomSessionID = UUID.randomUUID();
		storeUUID.addSessionID(randomSessionID);
        // generate user name by UUID
        return new StompPrincipal(randomSessionID.toString());
    }
	
}
