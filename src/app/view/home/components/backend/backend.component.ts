import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent {
  onSend: boolean = false; 
  formBackend = {
    name: '',
    lastName: '',
    email: '',
  }

  onSubmit(form: NgForm): void {
    console.log('Form values', form);

    this.formBackend = {
      name: '',
      lastName: '',
      email: '',
    }
    this.onSend = true; 
  }

}
