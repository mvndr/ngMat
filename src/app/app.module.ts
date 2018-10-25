import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule  } from "@angular/router";
import {CustomMaterialModule} from "./material.module";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SharedComponent } from './shared/shared.component';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    SharedComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // MatGridListModule,
    // MatCardModule,
    // MatMenuModule,
    // MatIconModule,
    // MatButtonModule,
    LayoutModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
