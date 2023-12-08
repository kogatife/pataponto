import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      
      const passwordControl = this.userForm.get('password');
      const confirmPasswordControl = this.userForm.get('confirmPassword');

      
      if (passwordControl?.value && confirmPasswordControl?.value) {
        
        if (passwordControl.value === confirmPasswordControl.value) {
          this.apiService.registerUser(this.userForm.value).subscribe(response => {
            console.log(response);
          });
          alert('Cadastro realizado com sucesso.');
        } else {
          alert('As senhas não são iguais. Tente novamente.');
        }
      } else {
        // Algum dos controles ou suas propriedades value é nulo
        alert('Erro ao processar as senhas. Tente novamente.');
      }

      // if (this.userForm.get('password').value === this.userForm.get('confirmPassword').value) {
      //   alert('Cadastro realizado com sucesso.');
  
      //   this.apiService.registerUser(this.userForm.value).subscribe(response => {
      //     console.log(response);
      //   });
      // } else {
      //   alert('As senhas não são iguais. Tente novamente.');
      // }
     
    }
  }
}
