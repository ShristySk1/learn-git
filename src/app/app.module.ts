import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { ComplexComponent } from './complex/complex.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer.component';
import { DeployOneComponent } from './deploy-one/deploy-one.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
const approutes: Routes = [
  {path: '', component: BasicsComponent, children: [{path: 'aboutme', component: AboutmeComponent}]},
  {path: 'deploy', component: DeployOneComponent },
  {path: 'complex', component: ComplexComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    ComplexComponent,
    HeaderComponent,
    FooterComponent,
    DeployOneComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
