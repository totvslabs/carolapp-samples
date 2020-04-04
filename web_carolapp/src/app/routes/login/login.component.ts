import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-route-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

    constructor(private authService: AuthService,
        private router: Router,
        private thfNotification: ThfNotificationService,
        private objElement: ElementRef
    ) { }

    ngAfterViewInit(): void {
      this.objElement.nativeElement.querySelector('.thf-page-background-secondary-logo.thf-page-background-secondary-logo-right').remove();
      this.objElement.nativeElement.querySelector('.thf-page-background-footer-select').remove();
    }

    checkLogin(values) {
        this.authService.login(values.login, values.password).then(
            () => {
                this.router.navigate(['/']);
                setTimeout(() => {
                  window.location.reload();
                }, 100);
            },
            error => {
                if (error.status === 401) {
                    this.thfNotification.error('Incorrect password!');
                } else {
                    this.thfNotification.warning('Problem on the server');
                }
            }
        );
    }
}
