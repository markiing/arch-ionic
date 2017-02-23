import {Injectable} from '@angular/core';
import { Http } from '@angular/http'
import { Comentario } from '../model/comentario'
import { Services } from './Services'


@Injectable()
export class ComentarioService extends Services<Comentario> {
  
  private comentariosList:Comentario[] = [];
  
  constructor(public http: Http){
    super(Comentario, http);
  }

  public recognize(): void{
    let obs = this.oneResultGet("");
    obs.subscribe(data => data.forEach(comment => console.log(comment)));
    this.comentariosList.forEach(com => console.log(com.body));
  }
  
  
}