import { Component, OnInit, Inject } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { RegisterDialogComponent } from './modules/auth/register-dialog/register-dialog.component';
import { LoginDialogComponent } from './modules/auth/login-dialog/login-dialog.component';
import { AuthenticationFacade } from './modules/auth/+state/authentication.facade';
import { AngularFireAuth } from '@angular/fire/auth';
import { distinctUntilChanged } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
declare const gtag: Function;

@Component({
  selector: 'cr-tips-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  version;
  constructor(
    private dialog: NzModalService,
    public afAuth: AngularFireAuth,
    private authFacade: AuthenticationFacade,
    private router: Router,
    @Inject('config') private config
    ) {
            // Google Analytics
            router.events
            .pipe(
              distinctUntilChanged((previous: any, current: any) => {
                if (current instanceof NavigationEnd) {
                  return previous.url === current.url;
                }
                return true;
              })
            ).subscribe((event: any) => {
            gtag('set', 'page', event.url);
            gtag('send', 'pageview');
          });
    }

  ngOnInit() {
    this.afAuth.authState.subscribe((state) => { // Should probably move that to selector and get that here from state.
    });
    this.version = this.config.version;
  }


  showRegisterModal(): void {
    this.dialog.create({
      nzTitle: "Register",
      nzContent: RegisterDialogComponent,
      nzFooter: null,
      nzWidth: '650px',
      nzClosable: true,
      nzMaskClosable: false,
      nzOnCancel: (instance) => {
        if (instance.validateForm.untouched){
          return false;
        }
      }
    });
  }

  showLoginModal(): void {
    this.dialog.create({
      nzTitle: "Login",
      nzContent: LoginDialogComponent,
      nzFooter: null,
      nzWidth: "600px",
      nzMaskClosable: false,
      nzClosable: true,
      nzKeyboard: false,
      nzOnCancel: (instance) => {
        if (instance.validateForm.untouched){
          return false;
        }
      }
    })
  }

  logout() {
    this.authFacade.logout();
  }

}

