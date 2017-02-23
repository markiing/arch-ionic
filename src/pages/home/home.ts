import { Component } from '@angular/core';
import { ComentarioService } from '../../service/ComentarioService'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ComentarioService],
  template: `
    <form (ngSubmit)="logar(usuario,senha)">
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

  constructor(public navCtrl: NavController, private _comentarioService: ComentarioService) {
  }
  
  logar(usuario: string, senha:string){
    console.log("cheguei");
    this._comentarioService.recognize();
  }

}
