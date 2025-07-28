import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecins } from '../models/medecins';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private apiUrl = 'http://localhost:3000/medecins'

  constructor(private http: HttpClient) { }

  getTousLesMedecins(): Observable<Medecins[]>{
    return this.http.get<Medecins[]>(this.apiUrl);
  }

  ajouter(medecin : Medecins):  Observable<Medecins>{
    return this.http.post<Medecins>(this.apiUrl, medecin);
  }

  modifier(id:string, medecin:Medecins): Observable<Medecins>{
    return this.http.put<Medecins>(`${this.apiUrl}/${id}`, medecin);
  }

  supprimer(id:string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
