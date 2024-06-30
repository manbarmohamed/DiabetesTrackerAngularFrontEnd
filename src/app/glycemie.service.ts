import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Glycemie } from './glycemie';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlycemieService {

  url:string="http://localhost:8081/";
  constructor(private http :HttpClient ) {}

  public getAllGlycemie():Observable<Glycemie[]>{
    return this.http.get<Glycemie[]>(this.url+'All')
  }
  public addGlycemie(glycemie:Glycemie){
    return this.http.post<Glycemie>(this.url+'save',glycemie)
  }

  public delete(id:number){
    return this.http.delete<Glycemie>(this.url+'delete/'+id)
  }

  public findById(id:number){
    return this.http.get<Glycemie>(this.url+'findById/'+id)
  }

  public update(id:number, glycmie: Glycemie){
    return this.http.put<Glycemie>(this.url+'update/'+id, glycmie)
  }
}
