import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../core/services/user/user';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private readonly userService: User = inject(User);
  private readonly router: Router = inject(Router);
  errMsg: string = '';
  successMsg: string = '';
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]), // Valdite the Length of Value
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]{4,}$/),
    ]),
    age: new FormControl(null, [Validators.required, Validators.min(20)]), // Valdit Value
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  registerUser() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.userService.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          console.log(res);
          this.errMsg = '';
          if (res?.msg == 'done') {
            this.successMsg = 'Register Success';
            localStorage.setItem('token', res.token);
            setTimeout(() => {
              this.router.navigate(['./home']);
            }, 1500);
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
          this.errMsg = err.error.msg;
        },
      });
    } else {
      this.errMsg = 'Your Data Not Valid';
      console.log('YOUR Data Not Valid');
    }
  }
}
