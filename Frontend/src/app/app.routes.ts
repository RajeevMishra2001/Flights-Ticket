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
    {path:'', component: Home},
    {path:'home', component: Home},
    {path:'about', component: About},
    {path:'privacy', component: Privacy},
    {path:'refund', component: Refund},
    {path:'faqs', component: Faqs},
    {path:'termsCondition', component: Termscondition},
    {path:'contact', component: Contact},  
    {path:'booking', component: Booking},
    {path:'payment', component: Payment},


];
