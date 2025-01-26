import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Message} from 'primeng/message';
import {ValidationErrors} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {getErrorMessage} from '../../../config/error-messages';

@Component({
  selector: 'input-error',
  imports: [
    Message,
    NgForOf
  ],
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InputErrorComponent {

  @Input()
  errors?: ValidationErrors | null;
  @Input()
  touched?: boolean = false;
  params?: Map<string, string>


  protected readonly Object = Object;
  protected readonly getErrorMessage = getErrorMessage;
}
