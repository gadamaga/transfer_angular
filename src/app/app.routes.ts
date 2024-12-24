import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pricelist', component: PriceListComponent},
  {path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent },
  {path: 'gallery', component: GalleryComponent},
  {path: 'reservation', component: ReservationComponent}
];