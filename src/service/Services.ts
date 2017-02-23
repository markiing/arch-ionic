import { ServiceConfiguration } from './ServiceConfiguration'
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Services<T> extends ServiceConfiguration {

constructor(public http: Http){
    super();
}
  
getManyResults(serviceRequested:string):Observable<T[]>{
    let observable = this._getObervableResult(serviceRequested);
    return observable;
}

getOneResult(serviceRequested:string):Observable<T>{
    let observable = this._getObervableResult(serviceRequested);
    return observable;
}

putOneObject(serviceRequested:string, object: T){
     return this.http.put(this.getRequestURL(serviceRequested), JSON.stringify(object), this._getHeaders)
                                .map(this._extractData)
                                .catch(this._handleError);
}

putManyObjects(serviceRequested:string, object: T[]){
    return this.http.put(this.getRequestURL(serviceRequested), JSON.stringify(object), this._getHeaders)
                                .map(this._extractData)
                                .catch(this._handleError);
}


private _getObervableResult(serviceRequested:string){
     return this.http.get(this.getRequestURL(serviceRequested))
                                .map(this._extractData)
                                .catch(this._handleError);
}

  
private _extractData(res:Response){
    let data = res.json();
    return data;
}
  
private _handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private _getHeaders(): Headers{
     let headers = new Headers({ 'Content-Type': 'application/json' });
     return headers;
  }
  
}