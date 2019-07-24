import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cr-tips-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.createRegisterForm();
  }


  createRegisterForm() {
    return this.fb.group({
      email: [''],
      password: [''],
      checkPassword: [''],
      nickname: [''],
      ign: ['']
    });
  }

  submitForm() {

  }

  updateConfirmValidator() {}

}
