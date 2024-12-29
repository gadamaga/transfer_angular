import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,HomeComponent, RouterModule,ContactInfoComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transfer_angular';
}