import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cr-tips-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.less']
})
export class BugFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  category;

  ngOnInit() {

  }

}
