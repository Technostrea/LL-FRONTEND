import {Component, inject} from '@angular/core';
import {ApartmentService} from '@app/core/services/apartment/apartment.service';
import {SearchFilterComponent} from "@app/shared/features/search-filter/search-filter.component";
import {ItemCardApartmentComponent} from "@app/shared/components/item-card-apartment/item-card-apartment.component";

@Component({
  selector: 'app-apartment-list',
  standalone: true,
  imports: [
    SearchFilterComponent,
    ItemCardApartmentComponent
  ],
  templateUrl: './apartment-list.component.html',
  styleUrl: './apartment-list.component.scss'
})
export class ApartmentListComponent {
  protected apartmentService = inject(ApartmentService);
}
