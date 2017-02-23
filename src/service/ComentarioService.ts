import {Injectable} from '@angular/core';
import { Http } from '@angular/http'
import { Comentario } from '../model/comentario'
import { Services } from './Services'


@Injectable()
export class ComentarioService extends Services<Comentario> {
  
  private _comentariosList:Comentario[] = [];
  
  constructor(public http: Http){
    super(http);
  }

  public getAllSubjects(): Comentario[]{
    this._comentariosList = [];
    let obs = this.manyResultGet("recuperarassuntos?tokenApplication=1234567890");
    obs.subscribe(data=> data.forEach(d=> console.log(new Comentario(d.title,d.body))));
    return this._comentariosList;
  }
  
  
}