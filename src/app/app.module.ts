import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RobotComponent } from './robot/robot.component';
import { InicioComponent } from './inicio/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent },
  {
    path: 'robot',
    component: RobotComponent },
  {
    path: '',
    component: InicioComponent },
  {
    path: 'login',
    component: LoginComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    RobotComponent,
    InicioComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
    ,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
