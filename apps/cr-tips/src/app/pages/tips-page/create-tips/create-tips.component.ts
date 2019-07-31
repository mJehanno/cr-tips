import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AuthenticationState } from '../../../modules/auth/+state/authentication.reducer';
import { authenticationQuery } from '../../../modules/auth/+state/authentication.selectors';
import { TipsFacade } from '../+state/tips.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@cr-tips/data';

@Component({
  selector: 'cr-tips-create-tips',
  templateUrl: './create-tips.component.html',
  styleUrls: ['./create-tips.component.css']
})
export class CreateTipsComponent implements OnInit {

  validateForm: FormGroup
  currentUser: User;


  constructor(private fb: FormBuilder, private facade: TipsFacade, private store:Store<AuthenticationState>, private route: Router) { }

  ngOnInit() {
    this.validateForm = this.createTipsForm();
    this.store.pipe(select(authenticationQuery.getUser)).subscribe((data) => {
      console.log(data);
      this.currentUser = data;
    })
  }

  createTipsForm() {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  submitForm() {
    if(this.validateForm.valid){
      const tips = {
        content: this.validateForm.value.content,
        title: this.validateForm.value.title,
        description: this.validateForm.value.description,
        date: new Date(),
        author: this.currentUser.idUser};
      this.facade.addTips(tips);
      this.route.navigate(['/','tips']);
    }
  }


}
