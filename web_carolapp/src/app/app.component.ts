import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { carol } from '@carol/carol-sdk/lib/carol';
import { httpClient } from '@carol/carol-sdk/lib/http-client';
import { Router } from '@angular/router';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private utils: UtilsService
  ) {

    this.auth.sessionObservable.subscribe();

    carol.setOrganization(this.utils.getOrganization());
    carol.setEnvironment(this.utils.getEnvironment());

    const idToken = localStorage.getItem(this.auth.getTokenName());
    if (idToken) {
      carol.setAuthToken(idToken.replace(/\"/g, ''));
    }


    carol.setAuthToken(idToken);

    httpClient.addInterceptor('auth', (status, response) => {
      if (status === 401) {
        this.router.navigate(['login']);
      }
    });
  }
}
