import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, FormBuilder, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inscription-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './inscription-form.component.html',
  styleUrl: './inscription-form.component.scss'
})
export class InscriptionFormComponent {
  formBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],

    addressForm: this.formBuilder.group({
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
    }),

    passwords: this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: this.checkEqualityValidator('password',
          'confirmPassword')
      }
    )
  });
  checkEqualityValidator(controlName1: string, controlName2:
    string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors |
      null => {
      const password = control.get(controlName1);
      const confirmPassword = control.get(controlName2);
      const isValid = password?.value ===
        confirmPassword?.value;
      return isValid ? null : { 'notEqual': true };
    }
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
