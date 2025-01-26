import {Component} from '@angular/core';
import {RegistrationFormComponent} from '../registration-form/registration-form.component';

@Component({
  selector: 'app-registration-page',
  imports: [
    RegistrationFormComponent
  ],
  standalone: true,
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  year = new Date().getFullYear();
}
