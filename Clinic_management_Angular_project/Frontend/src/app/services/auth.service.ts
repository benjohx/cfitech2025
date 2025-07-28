import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecins } from '../models/medecins';
import { Admins } from '../models/admins';
import { Patients } from '../models/patients';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAdmin = "http://localhost:3000/admin";
  private apiUrlMedecin = "http://localhost:3000/medecins";
  private apiUrlPatient = "http://localhost:3000/patiens";

  constructor(private http: HttpClient) { }

  loginAdmin(email: string, password: string): Observable<Admins[]>{
    return this.http.get<Admins[]>(
      `${this.apiUrlAdmin}?email=${email}&password=${password}`
    )
  }

  loginMedecin(email: string, password: string): Observable<Medecins[]>{
    return this.http.get<Medecins[]>(
      `${this.apiUrlMedecin}?email=${email}&password=${password}`
    )
  }

  loginPatient(email: string, password: string): Observable<Patients[]>{
    return this.http.get<Patients[]>(
      `${this.apiUrlPatient}?email=${email}&password=${password}`
    )
  }

  logout(){
    localStorage.removeItem('adminConnecteId');
    localStorage.removeItem('medecinConnecteId');
    localStorage.removeItem('patientConnecteId');
  }

  getAdminConnecteId():number | null{
    const id = localStorage.getItem('adminConnecteId');
    return id ? Number(id) : null;
  }

  getMedecinConnecteId():number | null{
    const id = localStorage.getItem('medecinConnecteId');
    return id ? Number(id) : null;
  }

  getPatientConnecteId():number | null{
    const id = localStorage.getItem('patientConnecteId');
    return id ? Number(id) : null;
  }
}
