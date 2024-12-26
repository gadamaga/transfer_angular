import { Component } from '@angular/core';
import { ReservationComponent } from "../reservation/reservation.component";
import { ContactusComponent } from "../contactus/contactus.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReservationComponent, ContactusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
