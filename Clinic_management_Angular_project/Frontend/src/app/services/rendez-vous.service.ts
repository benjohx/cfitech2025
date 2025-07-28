import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rendezvous } from '../models/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private apiUrl = 'http://localhost:3000/rendezvous';

  constructor(private http: HttpClient) { }

  getToutLesRendezVous(): Observable<Rendezvous[]>{
    return this.http.get<Rendezvous[]>(this.apiUrl);
  }

  ajouter(rendezVous : Rendezvous):  Observable<Rendezvous>{
    return this.http.post<Rendezvous>(this.apiUrl, rendezVous);
  }

  modifier(id:string, rendezVous:Rendezvous): Observable<Rendezvous>{
    return this.http.put<Rendezvous>(`${this.apiUrl}/${id}`, rendezVous);
  }

  supprimer(id:string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
