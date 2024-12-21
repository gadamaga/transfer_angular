import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReservationComponent } from '../reservation/reservation.component';
import { ContactusComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ReservationComponent,ContactusComponent,FooterComponent,RouterModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
