import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseApi = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  get<T>(path: string) {
    return this.http.get<T>(`${this.baseApi}${path}`);
  }

  post<T>(path: string, body: any) {
    return this.http.post<T>(`${this.baseApi}${path}`, body);
  }

  put<T>(path: string, body: any) {
    return this.http.put<T>(`${this.baseApi}${path}`, body);
  }

  delete<T>(path: string) {
    return this.http.delete<T>(`${this.baseApi}${path}`);
  }

  patch<T>(path: string, body: any) {
    return this.http.patch<T>(`${this.baseApi}${path}`, body);
  }

  head<T>(path: string) {
    return this.http.head<T>(`${this.baseApi}${path}`);
  }

  options<T>(path: string) {
    return this.http.options<T>(`${this.baseApi}${path}`);
  }

  request<T>(method: string, path: string, options: any) {
    return this.http.request<T>(method, `${this.baseApi}${path}`, options);
  }

  getApiUrl() {
    return this.baseApi;
  }
}
