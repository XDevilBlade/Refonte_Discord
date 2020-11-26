package com.rtaillandier.discord.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ControllerWebSocketsSendTo {

	@MessageMapping("/sendto/message")
	@SendTo("/topic")
	public String broadcastMessages(@Payload String message) {
		System.out.println("///////////////////////");
		System.out.println("message reçu : "+message);
		System.out.println("///////////////////////");
		return message;
	}
		
}
