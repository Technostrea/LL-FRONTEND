import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment.development";
import {LoginDto} from "@app/shared/models/login-dto";
import {Observable} from "rxjs";
import {ApiService} from "@app/core/services/api.service";
import {ResponeApiType} from "@app/shared/models/respone-api-type";
import {User} from "@app/shared/models/user";
import {RegisterDto} from "@app/shared/models/register-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(ApiService);

  login(loginDto: LoginDto): Observable<ResponeApiType<User>> {
    return this.apiService.post(environment.endpoints.auth.LOGIN, loginDto);
  }

  register(registerDto: RegisterDto): Observable<ResponeApiType<User>> {
    return this.apiService.post(environment.endpoints.auth.LOGIN, registerDto);
  }

}
