import { Component, inject, OnInit } from '@angular/core';
import { SearchFilterComponent } from '@app/shared/features/search-filter/search-filter.component';
import { ItemCardApartmentComponent } from '@app/shared/components/item-card-apartment/item-card-apartment.component';
import { PropertyService } from '@app/core/services/property/property.service.js';
import { PropertyType } from '@app/shared/models/property-type.js';

@Component({
  selector: 'app-apartment-list',
  standalone: true,
  imports: [SearchFilterComponent, ItemCardApartmentComponent],
  templateUrl: './apartment-list.component.html',
  styleUrl: './apartment-list.component.scss',
})
export class ApartmentListComponent implements OnInit {
  protected propertyService = inject(PropertyService);
  properties: PropertyType[] = [];

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertyService.getProperties().subscribe({
      next: (response) => {
        this.properties = response.data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des biens :', error);
      },
    });
  }
}
