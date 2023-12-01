import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SaibamaisComponent } from './saibamais/saibamais.component';
import { RegrasComponent } from './regras/regras.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'saibamais',
    component: SaibamaisComponent
  },
  {
    path: 'regras',
    component: RegrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
