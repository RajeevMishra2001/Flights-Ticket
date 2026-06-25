import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
   openEmail() {
  window.location.href = 'mailto:support@thetravelservicellc.com';
}
}
