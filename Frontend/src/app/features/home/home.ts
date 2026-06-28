import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ɵresetIncrementalHydrationEnabledWarnedForTests } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeAdvertisement } from '../home-advertisement/home-advertisement';
import AOS from 'aos';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Tab } from '../../services/tab';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeAdvertisement],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  flightForm!: FormGroup;

  fromCity: string = '';
  toCity: string = '';


  constructor(private fb: FormBuilder, private http: HttpClient, private tabService: Tab) { }

  ngOnInit(): void {
    this.flightSubmission();
    this.hotelSubmission();

        AOS.init({
          duration: 1000,
          once: true
        });

         this.tabService.tab$.subscribe(tab => {
    this.changeTab(tab);
  });
  }


  changeTab(tab: string) {

  this.activeTab = tab;

  this.flightForm.reset();

  this.fromCity = '';
  this.toCity = '';

}

  activeTab: string = 'flight';
  flightTab: string = 'oneway';
  selectedFare: string = 'student';

  flightSubmission() {
    this.flightForm = this.fb.group({
      fromCity: ['', Validators.required],
      toCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      travellers: ['', Validators.required],
      contactNumber: [''],
    });
  }

  showConfirmation: boolean = false;

  searchFlights() {

    if (this.flightForm.invalid) {
      alert('Please fill in all required fields correctly.');
    }

    if (this.flightForm.valid) {
      this.showConfirmation = true;
    }
  }

  closeConfirmation() {
    this.showConfirmation = false;
  }

  confirmSubmit() {
    this.showConfirmation = false;

     const contact =  this.flightForm.value.contactNumber

  if (!contact || contact.length < 3) {

    alert('Please enter valid contact number');
    this.showConfirmation = true;

    return;
  }

    console.log('Flight Search Details:', this.flightForm.value);

    // let apiURL = 'https://localhost:3000/flight-details';

    this.http.post('https://flights-ticket.vercel.app/flight-details', this.flightForm.value)
.subscribe(res => {

  console.log(res);

});
      

    this.flightForm.reset({
      fromCity: '',
      toCity: '',
      departureDate: '',
      returnDate: '',
      travellers: '',
      contactNumber: ''
    });
  }

searchHotels(){

  if(this.hotelForm.invalid) {
    alert('Please fill in all required fields correctly.');
    return;
  }
  alert('Hotel search functionality is under development. Please check back later.');
 console.log('Hotel Search Details:', this.hotelForm.value);

    this.http.post('https://flights-ticket.vercel.app/hotel-details', this.hotelForm.value)
.subscribe(res => {

  console.log(res);


  this.hotelForm.reset({
      location: '',
      checkIn: '',
      checkOut: '',
      rooms: '',
      contactDetails: ''
    });

});

}

  hotelForm!: FormGroup;

  hotelSubmission() {
    this.hotelForm = this.fb.group({
      location: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      rooms: ['', Validators.required],
      contactDetails: ['', Validators.required]  
    });
  }






    flights = [
  {
    code: 'DEL',
    city: 'Delhi',
    airport: 'Indira Gandhi International Airport'
  },

  {
    code: 'BOM',
    city: 'Mumbai',
    airport: 'Chhatrapati Shivaji Maharaj International Airport'
  },

  {
    code: 'BLR',
    city: 'Bangalore',
    airport: 'Kempegowda International Airport'
  },

  {
    code: 'GOI',
    city: 'Goa',
    airport: 'Goa International Airport'
  },

  {
    code: 'MAA',
    city: 'Chennai',
    airport: 'Chennai International Airport'
  },

  {
    code: 'CCU',
    city: 'Kolkata',
    airport: 'Netaji Subhas Chandra Bose International Airport'
  },

  {
    code: 'HYD',
    city: 'Hyderabad',
    airport: 'Rajiv Gandhi International Airport'
  },

  {
    code: 'PNQ',
    city: 'Pune',
    airport: 'Pune International Airport'
  },

  {
    code: 'AMD',
    city: 'Ahmedabad',
    airport: 'Sardar Vallabhbhai Patel International Airport'
  },

  {
    code: 'JAI',
    city: 'Jaipur',
    airport: 'Jaipur International Airport'
  },

  {
    code: 'LKO',
    city: 'Lucknow',
    airport: 'Chaudhary Charan Singh International Airport'
  },

  {
    code: 'IXC',
    city: 'Chandigarh',
    airport: 'Chandigarh International Airport'
  },

  {
    code: 'ATQ',
    city: 'Amritsar',
    airport: 'Sri Guru Ram Dass Jee International Airport'
  },

  {
    code: 'VTZ',
    city: 'Visakhapatnam',
    airport: 'Visakhapatnam International Airport'
  }

];



Intflights = [

  {
    code: 'ATL',
    city: 'Atlanta',
    airport: 'Hartsfield–Jackson Atlanta International Airport'
  },

  {
    code: 'AUS',
    city: 'Austin',
    airport: 'Austin-Bergstrom International Airport'
  },

  {
    code: 'BOS',
    city: 'Boston',
    airport: 'Boston Logan International Airport'
  },

  {
    code: 'BUF',
    city: 'Buffalo',
    airport: 'Buffalo Niagara International Airport'
  },

  {
    code: 'CLE',
    city: 'Cleveland',
    airport: 'Cleveland Hopkins International Airport'
  },

  {
    code: 'CLT',
    city: 'Charlotte',
    airport: 'Charlotte Douglas International Airport'
  },

  {
    code: 'CMH',
    city: 'Columbus',
    airport: 'John Glenn Columbus International Airport'
  },

  {
    code: 'DEN',
    city: 'Denver',
    airport: 'Denver International Airport'
  },

  {
    code: 'DFW',
    city: 'Dallas',
    airport: 'Dallas/Fort Worth International Airport'
  },

  {
    code: 'IND',
    city: 'Indianapolis',
    airport: 'Indianapolis International Airport'
  },

  {
    code: 'JAX',
    city: 'Jacksonville',
    airport: 'Jacksonville International Airport'
  },

  {
    code: 'LAS',
    city: 'Las Vegas',
    airport: 'Harry Reid International Airport'
  },

  {
    code: 'LAX',
    city: 'Los Angeles',
    airport: 'Los Angeles International Airport'
  },

  {
    code: 'MEM',
    city: 'Memphis',
    airport: 'Memphis International Airport'
  },

  {
    code: 'MIA',
    city: 'Miami',
    airport: 'Miami International Airport'
  },

  {
    code: 'MKE',
    city: 'Milwaukee',
    airport: 'Milwaukee Mitchell International Airport'
  },

  {
    code: 'MSP',
    city: 'Minneapolis',
    airport: 'Minneapolis–Saint Paul International Airport'
  },

  {
    code: 'OAK',
    city: 'Oakland',
    airport: 'Oakland International Airport'
  },

  {
    code: 'OKC',
    city: 'Oklahoma City',
    airport: 'Will Rogers World Airport'
  },

  {
    code: 'PHL',
    city: 'Philadelphia',
    airport: 'Philadelphia International Airport'
  },

  {
    code: 'PHX',
    city: 'Phoenix',
    airport: 'Phoenix Sky Harbor International Airport'
  },

  {
    code: 'PIT',
    city: 'Pittsburgh',
    airport: 'Pittsburgh International Airport'
  },

  {
    code: 'RDU',
    city: 'Raleigh-Durham',
    airport: 'Raleigh-Durham International Airport'
  },

  {
    code: 'SAN',
    city: 'San Diego',
    airport: 'San Diego International Airport'
  },

  {
    code: 'SAT',
    city: 'San Antonio',
    airport: 'San Antonio International Airport'
  },

  {
    code: 'SEA',
    city: 'Seattle',
    airport: 'Seattle–Tacoma International Airport'
  },

  {
    code: 'SFO',
    city: 'San Francisco',
    airport: 'San Francisco International Airport'
  },

  {
    code: 'SJC',
    city: 'San Jose',
    airport: 'Norman Y. Mineta San José International Airport'
  },

  {
    code: 'SLC',
    city: 'Salt Lake City',
    airport: 'Salt Lake City International Airport'
  },

  {
    code: 'SMF',
    city: 'Sacramento',
    airport: 'Sacramento International Airport'
  },

  {
    code: 'STL',
    city: 'St. Louis',
    airport: 'St. Louis Lambert International Airport'
  },

  {
    code: 'TPA',
    city: 'Tampa',
    airport: 'Tampa International Airport'
  },

  {
    code: 'ORD',
    city: 'Chicago',
    airport: 'O’Hare International Airport'
  },

  {
    code: 'MDW',
    city: 'Chicago',
    airport: 'Midway International Airport'
  },

  {
    code: 'JFK',
    city: 'New York',
    airport: 'John F. Kennedy International Airport'
  },

  {
    code: 'EWR',
    city: 'Newark',
    airport: 'Newark Liberty International Airport'
  },

  {
    code: 'IAD',
    city: 'Washington',
    airport: 'Washington Dulles International Airport'
  },

  {
    code: 'DCA',
    city: 'Washington',
    airport: 'Ronald Reagan Washington National Airport'
  },

  {
    code: 'ANC',
    city: 'Anchorage',
    airport: 'Ted Stevens Anchorage International Airport'
  },

  {
    code: 'BNA',
    city: 'Nashville',
    airport: 'Nashville International Airport'
  },

  {
    code: 'BWI',
    city: 'Baltimore',
    airport: 'Baltimore/Washington International Airport'
  },

  {
    code: 'CVG',
    city: 'Cincinnati',
    airport: 'Cincinnati/Northern Kentucky International Airport'
  },

  {
    code: 'DTW',
    city: 'Detroit',
    airport: 'Detroit Metropolitan Wayne County Airport'
  },

  {
    code: 'FLL',
    city: 'Fort Lauderdale',
    airport: 'Fort Lauderdale-Hollywood International Airport'
  },

  {
    code: 'HNL',
    city: 'Honolulu',
    airport: 'Daniel K. Inouye International Airport'
  },

  {
    code: 'IAH',
    city: 'Houston',
    airport: 'George Bush Intercontinental Airport'
  },

  {
    code: 'MCO',
    city: 'Orlando',
    airport: 'Orlando International Airport'
  },

  {
    code: 'MSY',
    city: 'New Orleans',
    airport: 'Louis Armstrong New Orleans International Airport'
  },

  {
    code: 'RSW',
    city: 'Fort Myers',
    airport: 'Southwest Florida International Airport'
  }

];

  openWhatsApp() {
    const phoneNumber = '8178787397'; // Replace with your WhatsApp number
    const message = 'Hello! I am interested in your services.'; // Replace with your desired message
    const url = `https://wa.me/${8178787397}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


  

@ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

ngAfterViewInit() {
  const video = this.bgVideo.nativeElement;

  video.load();

  video.oncanplay = () => {
    video.play().catch(err => console.log(err));
  };
}



}


