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
}
