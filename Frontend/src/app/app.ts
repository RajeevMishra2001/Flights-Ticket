import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import AOS  from 'aos';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Flight and Hotel Booking');

ngOnInit(): void {
  AOS.init({
    duration: 2000,      // 3 seconds
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
}


}
