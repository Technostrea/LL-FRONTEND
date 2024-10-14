import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PropertyType } from '@app/shared/models/property-type';

@Component({
  selector: 'app-item-card-apartment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-card-apartment.component.html',
  styleUrl: './item-card-apartment.component.scss',
})
export class ItemCardApartmentComponent {
  @Input({ required: true }) property: PropertyType = {} as PropertyType;
}
