import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WebService {
  url = 'http://localhost:8081/';
  constructor(private http: Http) { }


  getAll(type: string) {
    return this.http.get(this.url + type).map(r => r.json());
  }

  get(type: string, id: number) {
    return this.http.get(this.url + type + '/' + id).map(r => r.json());
  }

  create(type: string, body: Object) {
    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(this.http.post(this.url + type, bodyString, options).map(r => r.json()));
    return this.http.post(this.url + type, bodyString, options).map(r => r.json());

  }

  delete(type: string, id: number) {
    return this.http.delete(this.url + type + '/' + id).map(r => r.json());
  }
  update(type: string, body: Object, id : number) {
    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + type + '/' + id, bodyString, options).map(r => r.json());
  }

  getAllByElement(type: string, elementId:number, element:string){
    return this.http.get(this.url + element + '/' + elementId +'/' + type +'s').map(r => r.json());


  }

}