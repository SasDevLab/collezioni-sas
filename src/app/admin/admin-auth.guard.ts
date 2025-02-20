import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    try {
      const userUid = await this.authService.getUserUid();
      const adminId = await this.authService.getAdminId();

      if (userUid !== adminId) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error('Error in AdminAuthGuard:', error);
      this.router.navigate(['/']);
      return false;
    }
  }
}
