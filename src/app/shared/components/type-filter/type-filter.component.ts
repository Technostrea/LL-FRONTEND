import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-type-filter',
  standalone: true,
  imports: [],
  templateUrl: './type-filter.component.html',
  styleUrl: './type-filter.component.scss'
})
export class TypeFilterComponent {
  //typeControl = new FormControl('');
  typeBiens = ['Appartement', 'Maison'];
}
