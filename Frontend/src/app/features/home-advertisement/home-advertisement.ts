import { Component } from '@angular/core';

@Component({
  selector: 'app-home-advertisement',
  imports: [],
  templateUrl: './home-advertisement.html',
  styleUrl: './home-advertisement.css',
})
export class HomeAdvertisement {

  openWhatsApp() {
    const phoneNumber = '9555948704'; // Replace with your WhatsApp number
    const message = 'Hello! I am interested in your services.'; // Replace with your desired message
    const url = `https://wa.me/${9555948704}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


}
