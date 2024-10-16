import {Injectable} from '@angular/core';
import {PropertyType} from '@app/shared/models/property-type.js';
import {ResponeApiType} from '@app/shared/models/respone-api-type.js';
import {environment} from '@env/environment.development';
import {Observable} from 'rxjs';
import {ApiService} from "@app/core/services/api.service";

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private propertiesEndPoint = environment.endpoints.properties;

  constructor(private http: ApiService) {
  }

  getProperties(): Observable<ResponeApiType<PropertyType[]>> {
    return this.http.get<ResponeApiType<PropertyType[]>>(this.propertiesEndPoint.GET_ALL_PROPERTY);
  }

  getShowProperty(id: string): Observable<ResponeApiType<PropertyType>> {
    return this.http.get<ResponeApiType<PropertyType>>(this.propertiesEndPoint.GET_SHOW_PROPERTY(id));
  }
}
