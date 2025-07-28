import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  role = localStorage.getItem('role')??'invite';

  constructor(private router:Router){}

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
