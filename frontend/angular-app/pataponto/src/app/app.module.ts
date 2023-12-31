import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SaibamaisComponent } from './saibamais/saibamais.component';
import { RegrasComponent } from './regras/regras.component';
import { MotoristaComponent } from './motorista/motorista.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ViagemComponent } from './viagem/viagem.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SaibamaisComponent,
    RegrasComponent,
    HomeComponent,
    MotoristaComponent,
    LoginComponent,
    CadastroComponent,
    ViagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
