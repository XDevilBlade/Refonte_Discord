import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  private entry : ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    console.log("accueil");
    console.log(this.entry);
    console.log("/*******************************/");
  }

  ngOnDestroy():void{
    console.log("je détruit le composant Accueil");
  }

}
