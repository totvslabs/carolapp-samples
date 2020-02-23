import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

import { LoginComponent } from './routes/login/login.component';
import { HomeComponent } from './routes/home/home.component';

import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';

import { ThfModule } from '@totvs/thf-ui';
import { ThfToolbarModule } from '@totvs/thf-ui/components/thf-toolbar';
import { ThfMenuModule } from '@totvs/thf-ui/components/thf-menu';
import { ThfPageModule } from '@totvs/thf-ui/components/thf-page';
import { BaseComponent } from './routes/base/base.component';
import { FormsModule } from '@angular/forms';

import { ThfKendoModule } from '@totvs/thf-kendo';
import { ThfModalPasswordRecoveryModule } from '@totvs/thf-templates/components/thf-modal-password-recovery';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThfModule,
    ThfKendoModule,
    ThfPageLoginModule,
    ThfToolbarModule,
    ThfPageModule,
    ThfMenuModule,
    ThfModalPasswordRecoveryModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
