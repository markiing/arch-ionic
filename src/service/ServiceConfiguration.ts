export class ServiceConfiguration {
  
  private _url:string = "https://jsonplaceholder.typicode.com/";
  private _api:string = "posts";
  
  getRequestURL(service: string):string{
      console.log("Requested URI: "+this._url+this._api+service);
      return this._url+this._api+service;
  }
  
}