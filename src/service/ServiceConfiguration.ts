export class ServiceConfiguration {
  
  private _url:string = "http://localhost:8080/";
  private _api:string = "FradeTecnologiaService/";
  
  getRequestURL(service: string):string{
      console.log("Requested URI: "+this._url+this._api+service);
      return this._url+this._api+service;
  }
  
}