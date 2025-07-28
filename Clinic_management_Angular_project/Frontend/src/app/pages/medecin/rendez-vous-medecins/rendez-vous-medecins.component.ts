import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../../../models/rendezvous';
import { Router } from '@angular/router';
import { RendezVousService } from '../../../services/rendez-vous.service';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-rendez-vous-medecins',
  imports: [CommonModule],
  templateUrl: './rendez-vous-medecins.component.html',
  styleUrl: './rendez-vous-medecins.component.css'
})
export class RendezVousMedecinsComponent implements OnInit{
  rendezVous: Rendezvous[] = [];

  patients: any[] = [];

  medecinConnecteId: string = '';

  constructor(private router:Router, private rendezVousService: RendezVousService, private patientService:PatientService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.medecinConnecteId = localStorage.getItem('medecinConnecteId') || '';
    this.chargerMesRendezVous();
    this.loadPatients();
  }

  chargerMesRendezVous(){
    if(this.medecinConnecteId){
      this.rendezVousService.getToutLesRendezVous().subscribe(data => {
        this.rendezVous = data.filter(
          rdv => rdv.medecinId === this.medecinConnecteId
        );
      });
    }else{
      this.rendezVous = [];
    }
  }

  loadPatients(){
    this.patientService.getTousLesPatients().subscribe(data => {
      this.patients = data;
    })
  }

  retourDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
