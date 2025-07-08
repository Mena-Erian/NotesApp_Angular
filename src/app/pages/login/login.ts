import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../core/services/user/user';
import { Route, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly user: User = inject(User);
  private readonly router: Router = inject(Router);
  readonly formBuilder: FormBuilder = inject(FormBuilder);
  successMsg: string = '';
  errMsg: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{4,}$/)],
    ],
  });

  loginUser() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.user.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          console.log(res);
          this.errMsg = '';
          if (res?.msg == 'done') {
            this.successMsg = 'login Success';
            localStorage.setItem('token', res.token);
            setTimeout(() => {
              this.router.navigate(['./home']);
            }, 1000);
          }
        },
        error: (err: any) => {
          this.isLoading = false;
          console.error(err.error);
          this.errMsg = err.error.msg;
        },
      });
    } else {
      this.errMsg = 'Your Data Not Valid';
    }
  }
}
