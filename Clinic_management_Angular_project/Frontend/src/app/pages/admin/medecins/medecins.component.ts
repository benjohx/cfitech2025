import { Component, OnInit } from '@angular/core';
import { Medecins } from '../../../models/medecins';
import { Router } from '@angular/router';
import { MedecinService } from '../../../services/medecin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medecins',
  imports: [CommonModule,FormsModule],
  templateUrl: './medecins.component.html',
  styleUrl: './medecins.component.css'
})
export class MedecinsComponent implements OnInit{
  medecins:Medecins[]= [];

  nouveauMedecin:Medecins = {nom:'',email:'',password:'',telephone:'',specialite:''};

  modifierEncours = false;

  medecinAModifier!: Medecins;

  constructor(private router:Router, private medecinService:MedecinService ){}

  ngOnInit(): void {
    this.chargerMedecins();
  }

  chargerMedecins(): void{
    this.medecinService.getTousLesMedecins().subscribe(data =>{
      this.medecins = data;
    })
  }

  enregistrer() : void{
    if(this.modifierEncours && this.medecinAModifier.id){
      this.medecinService.modifier(this.medecinAModifier.id,this.nouveauMedecin).subscribe(() => {
        this.modifierEncours = false;
        this.nouveauMedecin = {nom:'',email:'',password:'',telephone:'',specialite:''};
        this.chargerMedecins();
      });
    } else {
      this.medecinService.ajouter(this.nouveauMedecin).subscribe(() =>{
        this.nouveauMedecin = {nom:'',email:'',password:'',telephone:'',specialite:''};
        this.chargerMedecins();
      });
    }
  }

  modifier(medecin: Medecins): void{
    this.nouveauMedecin = {...medecin };
    this.modifierEncours = true;
    this.medecinAModifier = medecin;
  }

  supprimer(medecin: Medecins): void{
    if(!medecin.id){
      alert('ID manquant');
      return;
    }
    if(confirm('Voulez-vous vraiment supprimer ?')) {
      this.medecinService.supprimer(medecin.id).subscribe(() =>{
        this.chargerMedecins();
      });
    }
  }

  annuler(): void{
    this.nouveauMedecin = {nom:'',email:'',password:'',telephone:'',specialite:''};
    this.modifierEncours = false;
  }

  retourDashboard(): void{
    this.router.navigate(['/dashboard'])
  }
}


