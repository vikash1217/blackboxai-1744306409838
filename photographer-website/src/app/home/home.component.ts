import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showCookieConsent = true;

  constructor() { }

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
