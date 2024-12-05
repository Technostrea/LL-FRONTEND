import {Injectable} from '@angular/core';
import {PropertyType} from '@app/shared/models/property-type.js';
import {ResponseApiType} from '@app/shared/models/response-api-type.js';
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

  getProperties(): Observable<ResponseApiType<PropertyType[]>> {
    return this.http.get<ResponseApiType<PropertyType[]>>(this.propertiesEndPoint.GET_ALL_PROPERTY);
  }

  getShowProperty(id: string): Observable<ResponseApiType<PropertyType>> {
    return this.http.get<ResponseApiType<PropertyType>>(this.propertiesEndPoint.GET_SHOW_PROPERTY(id));
  }
}
