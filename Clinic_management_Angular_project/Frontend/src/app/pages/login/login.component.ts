import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email='';
  password='';

  constructor(private router:Router,private authService: AuthService){}

  login(){
    if(!this.email || !this.password){
      alert('Veuillez remplir tous les champs')
    }else{
      this.authService.loginAdmin(this.email, this.password).subscribe(users => {
        if(users.length > 0){
          const admin = users[0];
          localStorage.setItem('role', 'admin');
          localStorage.setItem('adminConnecteId', String(admin.id));
          this.router.navigate(['/dashboard']);
        }else{
          this.authService.loginMedecin(this.email, this.password).subscribe(users => {
            if(users.length > 0){
              const medecin = users[0];
              localStorage.setItem('role', 'medecin');
              localStorage.setItem('medecinConnecteId', String(medecin.id));
              this.router.navigate(['/dashboard']);
            }else{
              this.authService.loginPatient(this.email, this.password).subscribe(users => {
                if(users.length > 0){
                  const patient = users[0];
                  localStorage.setItem('role', 'patient');
                  localStorage.setItem('patientConnecteId', String(patient.id));
                  this.router.navigate(['/dashboard']);
                }else{
                  alert('Identifiants incorrect');
                }
              })
            }
          })
        }
      })
    }
  }
}
