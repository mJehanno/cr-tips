import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from '@cr-tips/data'
import { AuthenticationFacade } from '../+state/authentication.facade';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'cr-tips-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(private fb: FormBuilder, private auhtFacade: AuthenticationFacade,private modal: NzModalRef) { }

  @Output() registered = new EventEmitter();
  validateForm: FormGroup;
  user: User;
  ngOnInit() {
    this.validateForm = this.createRegisterForm();
  }


  createRegisterForm() {
    return this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.min(7)])],
      checkPassword: ['',Validators.compose([Validators.required])],
      nickname: ['', Validators.required],
      ign: ['']
    }, {validators: this.updateConfirmValidator});
  }

  submitForm() {
    if(!this.validateForm.invalid) {
      this.user = this.validateForm.value;

      this.auhtFacade.register(this.user).subscribe(() => {});
      this.closeModal();

    }
  }
  closeModal() {
    this.modal.destroy()
  }

  updateConfirmValidator(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.checkPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

}
