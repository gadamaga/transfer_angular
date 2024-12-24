import { Component } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transfer_angular';
}