import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-apartment-detail',
  standalone: true,
  imports: [],
  templateUrl: './apartment-detail.component.html',
  styleUrl: './apartment-detail.component.scss'
})
export class ApartmentDetailComponent {
  private route = inject(ActivatedRoute);
}
