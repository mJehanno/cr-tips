import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef, NzModalControlService, NzMessageService } from 'ng-zorro-antd';
import { AuthenticationFacade } from '../+state/authentication.facade';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../../core/database/user.service';


@Component({
  selector: 'cr-tips-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.less']
})
export class LoginDialogComponent implements OnInit {

  constructor(private fb: FormBuilder, private modal: NzModalRef, private auhtFacade: AuthenticationFacade,
    public afAuth: AngularFireAuth, private userService: UserService, private message: NzMessageService) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.createLoginForm();
  }

  createLoginForm() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if(this.validateForm.valid){
      const user = { email : this.validateForm.value.email, password: this.validateForm.value.password};
      this.auhtFacade.login(user).then((auth) => {
        this.afAuth.user.subscribe((users) => {
          this.userService.retrieveFromToken(users.uid).subscribe((data) => {
            this.auhtFacade.userLogged(data[0]);
            this.closeModal();
          });
        });

      }).catch((err) => { this.message.error('Wrong login/password');});
    }
  }

  resetPassword(){
    if(!this.validateForm.get('email').value){
      this.message.error('You have to provide an email');
    }else {
      this.auhtFacade.resetPassword(this.validateForm.get('email').value).then(() => {
        this.message.info('Check your email to reset your password !');
      });
    }

  }


  closeModal() {
    this.modal.destroy();
  }

}
