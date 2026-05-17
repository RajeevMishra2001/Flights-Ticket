import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ɵresetIncrementalHydrationEnabledWarnedForTests } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeAdvertisement } from '../home-advertisement/home-advertisement';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeAdvertisement],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  flightForm!: FormGroup;

  fromCity: string = '';
  toCity: string = '';


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.flightSubmission();
    this.hotelSubmission();
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
    code: 'DXB',
    city: 'Dubai',
    airport: 'Dubai International Airport'
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
    code: 'LHR',
    city: 'London',
    airport: 'Heathrow Airport'
  },

  {
    code: 'JFK',
    city: 'New York',
    airport: 'John F. Kennedy International Airport'
  },

  {
    code: 'DXB',
    city: 'Dubai',
    airport: 'Dubai International Airport'
  },

  {
    code: 'CDG',
    city: 'Paris',
    airport: 'Charles de Gaulle Airport'
  },

  {
    code: 'SYD',
    city: 'Sydney',
    airport: 'Sydney Kingsford Smith Airport'
  },

  {
    code: 'HND',
    city: 'Tokyo',
    airport: 'Haneda Airport'
  },

  {
    code: 'SIN',
    city: 'Singapore',
    airport: 'Singapore Changi Airport'
  },

  {
    code: 'BKK',
    city: 'Bangkok',
    airport: 'Suvarnabhumi Airport'
  },

  {
    code: 'HKG',
    city: 'Hong Kong',
    airport: 'Hong Kong International Airport'
  },

  {
    code: 'FRA',
    city: 'Frankfurt',
    airport: 'Frankfurt Airport'
  },

  {
    code: 'IST',
    city: 'Istanbul',
    airport: 'Istanbul Airport'
  },

  {
    code: 'YYZ',
    city: 'Toronto',
    airport: 'Toronto Pearson International Airport'
  },

  {
    code: 'BCN',
    city: 'Barcelona',
    airport: 'Barcelona-El Prat Airport'
  },

  {
    code: 'SVO',
    city: 'Moscow',
    airport: 'Sheremetyevo International Airport'
  },

  {
    code: 'ICN',
    city: 'Seoul',
    airport: 'Incheon International Airport'
  }

  ];


}
