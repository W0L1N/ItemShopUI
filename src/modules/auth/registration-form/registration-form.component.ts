import {Component} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Password} from 'primeng/password';
import {InputErrorComponent} from '../../common/components/input-error/input-error.component';


@Component({
  selector: 'registration-form',
  imports: [
    InputText,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    Button,
    Password,
    InputErrorComponent,
    InputErrorComponent
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
  standalone: true
})
export class RegistrationFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async register() {
  }
}
