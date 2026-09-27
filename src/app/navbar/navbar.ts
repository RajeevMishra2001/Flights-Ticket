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
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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





}
