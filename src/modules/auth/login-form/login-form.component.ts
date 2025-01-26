import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Router, RouterLink} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';
import {InputErrorComponent} from '../../common/components/input-error/input-error.component';

@Component({
  selector: 'login-form',
  imports: [
    Button,
    FormsModule,
    InputText,
    Password,
    ReactiveFormsModule,
    RouterLink,
    InputErrorComponent,
    Toast,
    InputErrorComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  providers: [MessageService]
})
export class LoginFormComponent {

  showEmailConfirmation: boolean = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private messageService: MessageService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async login() {

  }


  showErrorMessage(summary: string, details: string) {
    this.messageService.add({severity: 'error', summary: summary, detail: details, life: 3000})
  }
}
