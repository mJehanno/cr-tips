import { Component } from '@angular/core';

@Component({
  selector: 'cr-tips-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  isRegisterVisible = false;


  showRegisterModal(): void {
    this.isRegisterVisible = true;
  }

  handleRegisterOk(): void {
    console.log('Button ok clicked!');
    this.isRegisterVisible = false;
  }

  handleRegisterCancel(): void {
    console.log('Button cancel clicked!');
    this.isRegisterVisible = false;
  }
}

