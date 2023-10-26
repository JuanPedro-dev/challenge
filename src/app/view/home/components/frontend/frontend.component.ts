import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
})
export class FrontendComponent {
  onSend: boolean = false;
  formBackend = {
    name: '',
    lastName: '',
    email: '',
  };

  onSubmit(form: NgForm): void {
    console.log('Form values', form);

    this.formBackend = {
      name: '',
      lastName: '',
      email: '',
    };
    this.onSend = true;
  }
}
