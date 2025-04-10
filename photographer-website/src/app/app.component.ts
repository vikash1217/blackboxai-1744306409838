import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'photographer-website';
  showCookieConsent = true;

  ngOnInit(): void {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (cookieChoice) {
      this.showCookieConsent = false;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookieChoice', 'accepted');
    this.showCookieConsent = false;
  }

  declineCookies(): void {
    localStorage.setItem('cookieChoice', 'declined');
    this.showCookieConsent = false;
  }
}
