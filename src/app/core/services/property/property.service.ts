import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyType } from '@app/shared/models/property-type.js';
import { ResponeApiType } from '@app/shared/models/respone-api-type.js';
import { environment } from '@env/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private baseApi = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getProperties(): Observable<ResponeApiType<PropertyType[]>> {
    return this.http.get<ResponeApiType<PropertyType[]>>(
      this.baseApi + environment.endpoints.getAllProperties
    );
  }

  getShowProperty(id: string): Observable<ResponeApiType<PropertyType>> {
    return this.http.get<ResponeApiType<PropertyType>>(
      this.baseApi + environment.endpoints.getShowProperties(id)
    );
  }
}
