import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { carol } from '@carol/carol-sdk/lib/carol';
import { ThfToolbarProfile } from '@totvs/thf-ui/components/thf-toolbar';
import * as moment from 'moment';
import { Observable, Observer } from 'rxjs';
import { utils } from '@carol/carol-sdk/lib/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionObservable: Observable<ThfToolbarProfile> ;
  sessionObserver: Observer<ThfToolbarProfile> ;

  constructor(
    private router: Router
  ) {
    this.sessionObservable = new Observable(observer => {
      this.sessionObserver = observer;

      if (localStorage.getItem('user')) {
        observer.next(this.buildProfile());
      }
    });
  }

  login(username, password) {
    return carol.login(username, password).then(response => {
      this.setSession(response, username);
      return response;
    });
  }

  setSession(authResult, user) {
    carol.setAuthToken(authResult['access_token']);

    const tokenName = this.getTokenName();

    localStorage.setItem(tokenName, authResult['access_token']);
    localStorage.setItem('user', user);

    const expiresAt = moment().add(authResult['expires_in'], 'second');
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

    this.sessionObserver.next(this.buildProfile());
  }

  getTokenName() {
    if (utils.getOrganization()) {
      return `carol-${utils.getOrganization()}-${utils.getEnvironment()}-token`;
    } else {
      return 'carol-token';
    }
  }

  getSession(): Observable < any > {
    return this.sessionObservable;
  }

  logout() {
    return carol.logout().then(() => {
      localStorage.clear();

      this.router.navigate(['login']);
    });
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  buildProfile(): ThfToolbarProfile {
    return {
      avatar: 'assets/images/avatar-24x24.png',
      title: localStorage.getItem('user')
    };
  }
}

