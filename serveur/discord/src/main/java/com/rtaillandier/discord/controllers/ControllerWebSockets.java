package com.rtaillandier.discord.controllers;

import java.security.Principal;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

@Controller
public class ControllerWebSockets {

	/*@MessageMapping("/app/message")
	@SendTo("/topic")
	public String broadcastMessages(@Payload String message) {
		System.out.println("///////////////////////");
		System.out.println("message reçu : "+message);
		System.out.println("///////////////////////");
		return message;
	}*/
	
	@MessageMapping("/app/message")
	@SendToUser("/topic")
	public String broadcastMessages(@Payload String message, Principal principal) {
		System.out.println("///////////////////////");
		System.out.println("principal : "+principal.getName());
		System.out.println("message reçu : "+message);
		System.out.println("///////////////////////");
		return message;
	}
	
}
