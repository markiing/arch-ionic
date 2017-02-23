import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Assunto } from '../model/Assunto';
import { Tipo } from '../model/Tipo';
import { Services } from './Services';

@Injectable()
export class AssuntoService extends Services<Assunto>{

  private _subjectList:Assunto[] = [];
  
  constructor(public http: Http){
    super(http);
  }

  getAllSubjects():Assunto[] {
    this._subjectList = [];
    let obs = this.manyResultGet("recuperarassuntos?tokenApplication=1234567890");
    obs.subscribe(data=> {
        data.forEach(d=> this._subjectList.push(new Assunto(d.codigo,d.ativo, new Tipo(d.tipo.codigo,d.tipo.ativo,d.tipo.tipo),d.assunto)));
    });
    return this._subjectList;
  }

}