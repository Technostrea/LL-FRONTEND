import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "@app/shared/components/footer/footer.component";
import {NavBarComponent} from "@app/shared/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    NavBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
