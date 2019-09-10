import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef, NzModalControlService, NzMessageService } from 'ng-zorro-antd';
import { AuthenticationFacade } from '../+state/authentication.facade';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../../core/database/user.service';


@Component({
  selector: 'cr-tips-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
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
          console.log(users)
          this.userService.retrieveFromToken(users.uid).subscribe((data) => {
            console.log(data);
            this.auhtFacade.userLogged(data[0]);
            this.closeModal();
          });
        });

      }).catch((err) => { this.message.error('Wrong login/password');});
    }
  }


  closeModal() {
    this.modal.destroy();
  }

}
