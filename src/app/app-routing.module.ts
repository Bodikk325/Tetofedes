import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ZsindelyComponent } from './zsindely/zsindely.component';
import { CserepComponent } from './cserep/cserep.component';
import { LaposComponent } from './lapos/lapos.component';
import { LemezComponent } from './lemez/lemez.component';
import { EgyebComponent } from './egyeb/egyeb.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  
  {
    path: "", component: HomeComponent
  },
  {
    path: "kapcsolat", component: ContactComponent
  },
  {
    path: "zsindely", component: ZsindelyComponent
  },
  {
    path: "cserep", component: CserepComponent
  },
  {
    path: "lapos", component: LaposComponent
  },
  {
    path: "lemez", component: LemezComponent
  },
  {
    path: "egyeb", component: EgyebComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
