import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-price-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.scss'
})
export class PriceFilterComponent {
  priceControl = new FormControl(5000);
}
