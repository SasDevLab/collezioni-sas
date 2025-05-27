import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function; // Declare gtag function for Google Analytics

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly measurementId = 'G-V5WTXXVBMX';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.trackPageView(event.urlAfterRedirects);
      }
    });
   }

  trackPageView(url: string) {
    gtag('config', this.measurementId, {
      'page_path': url
    });
  }
}
