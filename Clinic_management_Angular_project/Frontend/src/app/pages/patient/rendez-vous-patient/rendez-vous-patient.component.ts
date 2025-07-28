import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../../../models/rendezvous';
import { Router } from '@angular/router';
import { RendezVousService } from '../../../services/rendez-vous.service';
import { CommonModule } from '@angular/common';
import { MedecinService } from '../../../services/medecin.service';

@Component({
  selector: 'app-rendez-vous-patient',
  imports: [CommonModule],
  templateUrl: './rendez-vous-patient.component.html',
  styleUrl: './rendez-vous-patient.component.css'
})
export class RendezVousPatientComponent implements OnInit{
  rendezVous: Rendezvous[] =[];

  medecins: any[] = [];

  patientConnecteId: string = '';

  constructor(private router:Router, private rendezVousService:RendezVousService, private medecinService:MedecinService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.patientConnecteId = localStorage.getItem('patientConnecteId') || '';
    this.chargerMesRendezVous();
    this.loadMedecins();
  }

  chargerMesRendezVous(){
    if(this.patientConnecteId){
      this.rendezVousService.getToutLesRendezVous().subscribe(data => {
        this.rendezVous = data.filter(
          rdv => rdv.patientId === this.patientConnecteId
        );
      });
    }else{
      this.rendezVous = [];
    }
  }

  loadMedecins(){
    this.medecinService.getTousLesMedecins().subscribe(data =>{
      this.medecins = data;
    })
  }

  retourDashboard(){
    this.router.navigate(['/dashboard']);
  }
}

