import { Component } from '@angular/core';
import { Rendezvous } from '../../../models/rendezvous';
import { Router } from '@angular/router';
import { RendezVousService } from '../../../services/rendez-vous.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../services/patient.service';
import { MedecinService } from '../../../services/medecin.service';

@Component({
  selector: 'app-rendez-vous',
  imports: [FormsModule, CommonModule],
  templateUrl: './rendez-vous.component.html',
  styleUrl: './rendez-vous.component.css'
})
export class RendezVousComponent {
  rendezVous:Rendezvous[]=[];

  nouveauRendezVous: Rendezvous = {date: '',heure:'',patientId:'',medecinId:'',etat:''};

  modifierEncours = false;

  rendezVousAModifier!: Rendezvous;

  patients : any[] = [];

  medecins : any[] = [];


  constructor(private router:Router, private rendezVousService:RendezVousService, private patientService: PatientService, private medecinService:MedecinService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.chargerRendezVous();
    this.loadPatients();
    this.loadMedecins();
  }

  loadPatients(){
    this.patientService.getTousLesPatients().subscribe(data => {
      this.patients = data;
    })
  }

  loadMedecins(){
    this.medecinService.getTousLesMedecins().subscribe(data =>{
      this.medecins = data;
    })
  }

  chargerRendezVous(): void{
    this.rendezVousService.getToutLesRendezVous().subscribe(data =>{
      this.rendezVous = data;
    })
  }

  enregistrer() : void{
    if(this.modifierEncours && this.rendezVousAModifier.id){
      this.rendezVousService.modifier(this.rendezVousAModifier.id,this.nouveauRendezVous).subscribe(() => {
        this.modifierEncours = false;
        this.nouveauRendezVous = {date: '',heure:'',patientId:'',medecinId:'',etat:''};
        this.chargerRendezVous();
      });
    } else {
      this.rendezVousService.ajouter(this.nouveauRendezVous).subscribe(() =>{
        this.nouveauRendezVous = {date: '',heure:'',patientId:'',medecinId:'',etat:''};
        this.chargerRendezVous();
      });
    }
  }

  modifier(rendezVous: Rendezvous): void{
    this.nouveauRendezVous = {...rendezVous };
    this.modifierEncours = true;
    this.rendezVousAModifier = rendezVous;
  }

  supprimer(rendezVous: Rendezvous): void{
    if(rendezVous.id && confirm('Voulez-vous vraiment supprimer ?')){
      this.rendezVousService.supprimer(rendezVous.id).subscribe(() =>{
        this.chargerRendezVous();
      });
    }
  }

  annuler(): void{
    this.nouveauRendezVous = {date: '',heure:'',patientId:'',medecinId:'',etat:''};
    this.modifierEncours = false;
  }

  retourDashboard(): void{
    this.router.navigate(['/dashboard'])
  }
}
