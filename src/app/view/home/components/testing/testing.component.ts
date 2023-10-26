import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent {
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
