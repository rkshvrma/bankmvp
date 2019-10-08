import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApplycreditcompComponent } from './applycreditcomp/applycreditcomp.component';
import { InstantdecisioncompComponent } from './instantdecisioncomp/instantdecisioncomp.component';
import { StatuscompComponent } from './statuscomp/statuscomp.component';
import { RetrieveapplicationcompComponent } from './retrieveapplicationcomp/retrieveapplicationcomp.component';
import { HeaderComponent } from './header.component';
import { AppRouting } from './app.routing';
import { EmpLoginComponent } from './emplogincomp/emplogincomp.component';
import { UserLoginComponent } from './userlogincomp/userlogincomp.component';
import {DropDownDirective} from './shared/dropdown.service';
import {LogoutComponent} from './logout/logoutcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplycreditcompComponent,
    InstantdecisioncompComponent,
    StatuscompComponent,
    RetrieveapplicationcompComponent,
    HeaderComponent,
    EmpLoginComponent,
    DropDownDirective,
    UserLoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
