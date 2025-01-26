import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';
import {InputErrorComponent} from '../common/components/input-error/input-error.component';
import {InputText} from 'primeng/inputtext';
import {InputNumber} from 'primeng/inputnumber';
import {FileUpload} from 'primeng/fileupload';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-offer-form',
  imports: [
    Button,
    FormsModule,
    InputErrorComponent,
    InputText,
    ReactiveFormsModule,
    InputNumber,
    FileUpload
  ],
  templateUrl: './create-offer-form.component.html',
  styleUrl: './create-offer-form.component.css'
})
export class CreateOfferFormComponent implements OnInit {

  offerForm: FormGroup;

  reader = new FileReader();

  constructor(private fb: FormBuilder, public ref: DynamicDialogRef) {
    this.offerForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      price: ['', [Validators.required]],
      image: []
    });
  }

  ngOnInit(): void {
    this.reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        var binary = '';
        var bytes = new Uint8Array(this.reader.result as ArrayBuffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        console.log(window.btoa(binary))
        this.offerForm.patchValue({
          image: window.btoa(binary)
        });
      },
      false,
    );
  }

  createOffer() {

    fetch("http://localhost:8080/offer/create", {
      method: "POST",
      body: JSON.stringify(this.offerForm.value)
    }).then((response) => {
        if (response.ok)
          this.ref.close()
      }
    )
  }

  onBasicUploadAuto(event: any) {
    this.reader.readAsArrayBuffer(event.files[0]);
  }
}
