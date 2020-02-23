import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ThfToolbarProfile, ThfToolbarAction } from '@totvs/thf-ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html'
})
export class BaseComponent {

  menus = [
    { label: 'Home', link: './' },
  ];

  profile: Observable<ThfToolbarProfile>;

  profileActions: Array<ThfToolbarAction> = [
    {
      icon: 'thf-icon-exit',
      label: 'Exit',
      type: 'danger',
      separator: true,
      action: item => this.authService.logout()
    }
  ];

  constructor(
    private authService: AuthService,
  ) {
    this.profile = this.authService.sessionObservable;
  }

}
