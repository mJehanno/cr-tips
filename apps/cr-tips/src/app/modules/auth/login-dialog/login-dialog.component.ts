import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cr-tips-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.createLoginForm();
  }

  createLoginForm() {
    return this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submitForm() {

  }


}
