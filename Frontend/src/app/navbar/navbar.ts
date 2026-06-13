import { Component , ElementRef, HostListener, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isMenuOpen = false;

    ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  constructor(private elementRef: ElementRef){

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {

  if (
    this.isMenuOpen &&
    !this.elementRef.nativeElement.contains(event.target)
  ) {
    this.isMenuOpen = false;
  }
}


openWhatsApp() {
    const phoneNumber = '8178787397'; // Replace with your WhatsApp number
    const message = 'Hello! I am interested in your services.'; // Replace with your desired message
    const url = `https://wa.me/${8178787397}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


}
