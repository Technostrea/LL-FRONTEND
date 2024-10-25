import {Component, inject, OnDestroy} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "@app/core/services/auth/auth.service";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {RegisterDto} from "@app/shared/models/register-dto";
import {BrowserStorageService} from "@app/core/services/browser-storage/browser-storage.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {

  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private subscription = new Subscription();
  private browserStorage = inject(BrowserStorageService)

  protected registerForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  onSubmit() {

    this.browserStorage.setAuthData({token: 'myToken'})
    if (this.registerForm.invalid) {
      console.error('formulaire invalide');
      return;
    }


    const registerValue = this.registerForm.getRawValue() as RegisterDto;

    this.subscription = this.authService.register(registerValue).subscribe(
      {
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.error(err)
        },
        complete: () => {
          this.router.navigate(['/profile']);
        }
      }
    )
  }


  get name() {
    return this.registerForm.get('name')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
