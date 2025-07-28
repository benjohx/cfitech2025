import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patients } from '../models/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:3000/patiens'

  constructor(private http: HttpClient) { }

  getTousLesPatients(): Observable<Patients[]>{
    return this.http.get<Patients[]>(this.apiUrl);
  }

  ajouter(patient : Patients):  Observable<Patients>{
    return this.http.post<Patients>(this.apiUrl, patient);
  }

  modifier(id:string, patient:Patients): Observable<Patients>{
    return this.http.put<Patients>(`${this.apiUrl}/${id}`, patient);
  }

  supprimer(id:string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
