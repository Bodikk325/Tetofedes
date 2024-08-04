import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { ZsindelyComponent } from './zsindely/zsindely.component';
import { CserepComponent } from './cserep/cserep.component';
import { LaposComponent } from './lapos/lapos.component';
import { LemezComponent } from './lemez/lemez.component';
import { EgyebComponent } from './egyeb/egyeb.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    TestingComponent,
    ZsindelyComponent,
    CserepComponent,
    LaposComponent,
    LemezComponent,
    EgyebComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
