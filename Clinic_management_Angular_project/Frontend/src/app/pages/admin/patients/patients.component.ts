import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';
import { Patients } from '../../../models/patients';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  imports: [FormsModule,CommonModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent implements OnInit{

  patients: Patients[] = [];

  nouveauPatient:Patients = {nom:'',email:'',password:'',telephone:''};

  modifierEncours = false;

  patientAModifier!: Patients;

  constructor(private router:Router, private patientService:PatientService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.chargerPatients();
  }

  chargerPatients():void{
    this.patientService.getTousLesPatients().subscribe(data =>{
      this.patients = data;
    })
  }

  enregistrer(): void{
    if(this.modifierEncours){
      if(!this.patientAModifier.id){
        alert('ID manquant');
        return;
      }
      this.patientService.modifier(String(this.patientAModifier.id),this.nouveauPatient).subscribe(() => {
        this.modifierEncours = false;
        this.nouveauPatient = {nom:'', email:'',password:'',telephone:''};
        this.chargerPatients();
      });
    } else {
      this.patientService.ajouter(this.nouveauPatient).subscribe(() => {
        this.nouveauPatient = {nom:'', email:'',password:'',telephone:''};
        this.chargerPatients();
      })
    }
  }

  modifier(patient: Patients): void{
    this.nouveauPatient = {...patient };
    this.modifierEncours = true;
    this.patientAModifier = patient;
  }

  supprimer(patient: Patients): void{
    if(!patient.id){
      alert('ID manquant');
      return;
    }
    if(confirm('Voulez-vous vraiment supprimer ?')) {
      this.patientService.supprimer(String(patient.id)).subscribe(() => {
        this.chargerPatients();
      })
    }
  }

  annuler(): void{
    this.nouveauPatient = {nom:'',email:'',password:'',telephone:''};
    this.modifierEncours = false;
  }

  retourDashboard(): void{
    this.router.navigate(['/dashboard'])
  }
}
