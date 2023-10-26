import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/core/interfaces/User';

@Component({
  selector: 'app-dialog-data-user',
  templateUrl: './dialog-data-user.component.html',
  styleUrls: ['./dialog-data-user.component.scss'],
})
export class DialogDataUserComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}

}
