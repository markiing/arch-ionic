import { Component } from '@angular/core';
import { AssuntoService } from '../../service/AssuntoService'
import { NavController } from 'ionic-angular';
import { Assunto }from '../../model/Assunto';
import { Tipo }from '../../model/Tipo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AssuntoService],
  template: `
    <form (ngSubmit)="logar(usuario,senha)">
      <ul>
        <li *ngFor="let assunto of assuntos">{{assunto.assunto}}</li>
      </ul>
      <ion-item>
        <ion-label>Usuario</ion-label>
        <ion-input type="text" [(ngModel)]="usuario"  name="usuario"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Senha</ion-label>
        <ion-input type="text" [(ngModel)]="senha"  name="senha"></ion-input>
      </ion-item>
      <button ion-button type="submit" block>Add Todo</button>
    </form>
  `
})
export class HomePage {

  assuntos:Assunto[];

  constructor(public navCtrl: NavController, private _assuntoService: AssuntoService) {
  }
  
  logar(usuario: string, senha:string){
    let assuntos:Assunto[] = this._assuntoService.getAllSubjects();
    this.assuntos = assuntos;
  }

}
