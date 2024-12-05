import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-location-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './location-filter.component.html',
  styleUrl: './location-filter.component.scss',
})
export class LocationFilterComponent {
  locationControl = new FormControl([]);
  cities = [
    {
      name: 'Paris',
      districts: ['Montmartre', 'Le Marais', 'Belleville', 'La Défense'],
    },
    {
      name: 'Lyon',
      districts: ["Presqu'île", 'Part-Dieu', 'Croix-Rousse', 'Gerland'],
    },
    {
      name: 'Marseille',
      districts: ['Le Panier', 'La Joliette', 'Castellane', 'Le Vieux-Port'],
    },
  ];

  getSelectedLocations() {
    return this.locationControl.value;
  }
}
