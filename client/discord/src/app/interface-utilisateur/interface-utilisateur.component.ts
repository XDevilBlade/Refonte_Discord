import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-interface-utilisateur',
  templateUrl: './interface-utilisateur.component.html',
  styleUrls: ['./interface-utilisateur.component.css']
})
export class InterfaceUtilisateurComponent implements OnInit {

  private entryParent : ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

}
