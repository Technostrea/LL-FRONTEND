import {Component, inject, OnDestroy} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "@app/core/services/auth/auth.service";
import {LoginDto} from "@app/shared/models/login-dto";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {

  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private subscription = new Subscription();

  protected loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  onSubmit() {
    if (this.loginForm.invalid) {
      console.error('formulaire invalide');
      return;
    }

    const loginValue = this.loginForm.getRawValue() as LoginDto;

    this.subscription = this.authService.login(loginValue).subscribe(
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


  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
