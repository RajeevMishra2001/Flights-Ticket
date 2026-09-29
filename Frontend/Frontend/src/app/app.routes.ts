import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Privacy } from './features/privacy/privacy';
import { Refund } from './features/refund/refund';
import { Faqs } from './features/faqs/faqs';
import { Termscondition } from './features/termscondition/termscondition';
import { Contact } from './features/contact/contact';
import { Booking } from './features/booking/booking';
import { Payment } from './features/payment/payment';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home | The Travel Services'
  },
  {
    path: 'home',
    component: Home,
    title: 'Home | The Travel Services'
  },
  {
    path: 'about',
    component: About,
    title: 'About Us | The Travel Services'
  },
  {
    path: 'privacy',
    component: Privacy,
    title: 'Privacy Policy | The Travel Services'
  },
  {
    path: 'refund',
    component: Refund,
    title: 'Refund Policy | The Travel Services'
  },
  {
    path: 'faqs',
    component: Faqs,
    title: 'FAQs | The Travel Services'
  },
  {
    path: 'termsCondition',
    component: Termscondition,
    title: 'Terms & Conditions | The Travel Services'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Us | The Travel Services'
  },
  {
    path: 'booking',
    component: Booking,
    title: 'Booking | The Travel Services'
  },
  {
    path: 'payment',
    component: Payment,
    title: 'Payment | The Travel Services'
  }
];



