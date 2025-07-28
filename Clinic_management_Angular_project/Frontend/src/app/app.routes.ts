import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientsComponent } from './pages/admin/patients/patients.component';
import { MedecinsComponent } from './pages/admin/medecins/medecins.component';
import { RendezVousComponent } from './pages/admin/rendez-vous/rendez-vous.component';
import { RendezVousMedecinsComponent } from './pages/medecin/rendez-vous-medecins/rendez-vous-medecins.component';
import { RendezVousPatientComponent } from './pages/patient/rendez-vous-patient/rendez-vous-patient.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent},

    //admin
    {path:'patients', component:PatientsComponent},
    {path:'medecins', component:MedecinsComponent},
    {path:'rendez-vous', component:RendezVousComponent},

    //medecin
    {path:'rendez-vous-medecins', component:RendezVousMedecinsComponent},

    //patient
    {path: 'rendez-vous-patients', component:RendezVousPatientComponent}
];
