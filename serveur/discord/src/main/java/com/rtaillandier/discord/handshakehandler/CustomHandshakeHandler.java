package com.rtaillandier.discord.handshakehandler;

import java.security.Principal;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;

import com.rtaillandier.discord.principal.StompPrincipal;

public class CustomHandshakeHandler extends DefaultHandshakeHandler{
	
	@Override
    protected Principal determineUser(ServerHttpRequest request,
                                      WebSocketHandler wsHandler,
                                      Map<String, Object> attributes) {
		System.out.println("je suis dans la méthode determineUser");
        // generate user name by UUID
        return new StompPrincipal(UUID.randomUUID().toString());
    }
	
}
