import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../services/tab';

@Component({
  selector: 'app-home-advertisement',
  imports: [CommonModule],
  templateUrl: './home-advertisement.html',
  styleUrl: './home-advertisement.css',
})
export class HomeAdvertisement {

constructor(private tabService: Tab) {}
  
  goToHotel() {

  // Tell other component to select hotel tab
  this.tabService.selectTab('hotel');

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}

  openWhatsApp() {
    const phoneNumber = '8178787397'; // Replace with your WhatsApp number
    const message = 'Hello! I am interested in your services.'; // Replace with your desired message
    const url = `https://wa.me/${8178787397}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  selectedTab: string = 'domestic'; // Default selected tab


  


}
