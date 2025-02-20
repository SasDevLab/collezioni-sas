import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}

  navigateToLegoList(): void {
    this.router.navigate(['/admin/lego-list']);
  }

  navigateToBuragoList(): void {
    this.router.navigate(['/admin/burago-list']);
  }
}