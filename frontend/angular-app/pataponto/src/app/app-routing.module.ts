import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SaibamaisComponent } from './saibamais/saibamais.component';
import { RegrasComponent } from './regras/regras.component';
import { MotoristaComponent } from './motorista/motorista.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ViagemComponent } from './viagem/viagem.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'viagem',
    component: ViagemComponent
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
  },
  {
    path: 'motorista',
    component: MotoristaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
