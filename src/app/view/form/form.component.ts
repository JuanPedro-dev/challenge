import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import { MyErrorStateMatcher } from 'src/app/core/interfaces/myErrorStateMatcher';
import { DialogDataUserComponent } from 'src/app/shared/dialog-data-user/dialog-data-user.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  public dialog: MatDialog = inject(MatDialog)

  openDialog() {
    this.dialog.open(DialogDataUserComponent, {
      data: {
        name: this.formLogin.value.name,
        email: this.formLogin.value.email,
        password: this.formLogin.value.password,
        contact: this.formLogin.value.contact,
        dateOfBirth: this.formLogin.value.dateOfBirth,
      },
    });
  }


  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  hide = true;
  minLength: number = 4;

  floatLabelControl = new FormControl('auto' as FloatLabelType);
  hideRequiredControl = new FormControl(false);

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  formLogin!: FormGroup;

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minLength),
  ]);
  
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minLength),
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  contactFormControl = new FormControl('');

  dateBirthFormControl = new FormControl('');

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name: this.nameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl,
      contact: this.contactFormControl,
      dateOfBirth: this.dateBirthFormControl
    });
  }

  onSubmit(): void {
    console.log(this.formLogin.value);
    this.formLogin.reset();
  }


}
