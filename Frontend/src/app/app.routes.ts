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
    title: 'Home | Travel Services LLC'
  },
  {
    path: 'home',
    component: Home,
    title: 'Home | Travel Services LLC'
  },
  {
    path: 'about',
    component: About,
    title: 'About Us | Travel Services LLC'
  },
  {
    path: 'privacy',
    component: Privacy,
    title: 'Privacy Policy | Travel Services LLC'
  },
  {
    path: 'refund',
    component: Refund,
    title: 'Refund Policy | Travel Services LLC'
  },
  {
    path: 'faqs',
    component: Faqs,
    title: 'FAQs | Travel Services LLC'
  },
  {
    path: 'termsCondition',
    component: Termscondition,
    title: 'Terms & Conditions | Travel Services LLC'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Us | Travel Services LLC'
  },
  {
    path: 'booking',
    component: Booking,
    title: 'Booking | Travel Services LLC'
  },
  {
    path: 'payment',
    component: Payment,
    title: 'Payment | Travel Services LLC'
  }
];



