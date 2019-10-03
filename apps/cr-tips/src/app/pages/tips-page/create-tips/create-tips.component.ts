import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class CreateTipsComponent implements OnInit, AfterViewInit {

  validateForm: FormGroup
  currentUser: User;
  gameMode = null;
  category = null;
  listOfSelectedMode;
  listOfSelectedCategory;

  constructor(private fb: FormBuilder, private facade: TipsFacade, private store:Store<AuthenticationState>, private route: Router) { }

  ngOnInit() {
    this.validateForm = this.createTipsForm();
    this.store.pipe(select(authenticationQuery.getUser)).subscribe((data) => {
      this.currentUser = data;
    });

  }

  ngAfterViewInit(){
    this.validateForm.get('game_mode').valueChanges.subscribe(data => {
      this.listOfSelectedMode = data
    });
    this.validateForm.get('category').valueChanges.subscribe(data => {
      this.listOfSelectedCategory = data
    });
  }

  createTipsForm() {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      category: [null, Validators.required],
      game_mode: [null, Validators.required]
    });
  }

  submitForm() {
    if(this.validateForm.valid){
      console.log(this.validateForm.value);
      const tips = {
        content: this.validateForm.value.content,
        title: this.validateForm.value.title,
        description: this.validateForm.value.description,
        date: new Date(),
        score:0,
        author: this.currentUser.idUser,
        game_mode: this.validateForm.value.game_mode,
        category: this.validateForm.value.category
      };
      this.facade.addTips(tips);
      this.route.navigate(['/','tips']);
    }
  }


  /*updateValue(value){
    console.log(value);
    this.listOfSelectedValue = value;
    this.validateForm.patchValue({
      game_mode: this.listOfSelectedValue
    });
  }*/

}
