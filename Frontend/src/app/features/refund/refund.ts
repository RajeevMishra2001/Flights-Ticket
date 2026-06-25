import { Component } from '@angular/core';

@Component({
  selector: 'app-refund',
  imports: [],
  templateUrl: './refund.html',
  styleUrl: './refund.css',
})
export class Refund {
   openEmail() {
  window.location.href = 'mailto:support@thetravelservicellc.com';
}
}
