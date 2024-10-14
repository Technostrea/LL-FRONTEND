import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { LocationFilterComponent } from '@app/shared/components/location-filter/location-filter.component.js';
import { TypeFilterComponent } from '@app/shared/components/type-filter/type-filter.component.js';
import { PriceFilterComponent } from '@app/shared/components/price-filter/price-filter.component.js';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    NgClass,
    LocationFilterComponent,
    TypeFilterComponent,
    PriceFilterComponent
  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  isFilterSearchVisible = false;

  toggleFilters() {
    this.isFilterSearchVisible = !this.isFilterSearchVisible;
  }
}
