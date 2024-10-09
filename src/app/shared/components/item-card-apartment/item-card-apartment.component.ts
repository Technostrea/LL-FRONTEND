import {Component, Input} from '@angular/core';
import {Apartment} from "@app/shared/models/apartment";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-item-card-apartment',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './item-card-apartment.component.html',
  styleUrl: './item-card-apartment.component.scss'
})
export class ItemCardApartmentComponent {
  @Input({required:true}) apartment: Apartment = {} as Apartment;

}
