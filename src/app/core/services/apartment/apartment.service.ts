import { Injectable } from '@angular/core';
import {Apartment} from "@app/shared/models/apartment";
import * as apartmentSeeder from "@assets/data/seeder.json";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  get apartments() : Apartment[] {
    return apartmentSeeder.data as Apartment[];
  }
}
