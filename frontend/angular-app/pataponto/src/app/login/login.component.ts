import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm && this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
  
      if (email && password) {
        this.apiService.getUserByEmail(email).subscribe(
          (user: any) => {
            if (user && user.data.length > 0) {
              const userFromDb = user.data[0];
  
              if (userFromDb.password === password) {
                alert('Login bem-sucedido!');
              } else {
                alert('Senha incorreta. Tente novamente.');
              }
            } else {
              alert('Usuário não encontrado. Verifique o email.');
            }
          },
          (error) => {
            console.error('Erro no login:', error);
          }
        );
      }
    }
  }
}