import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,  
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
  
    if (this.loginForm.valid) {
      this.userService.getUser(email).subscribe(
        // Si el usuario existe, redirigimos a la página principal con el email como queryParam
        () => this.router.navigate(['/main'], { queryParams: { email } }),
        // Si el usuario no existe
        () => {
          if (confirm('Usuario no encontrado. ¿Desea crear uno nuevo?')) {
            this.userService.createUser(email).subscribe(
              () => {
                // Si la creación es exitosa, obtenemos el token del nuevo usuario
                this.userService.getUser(email).subscribe(
                  () => {
                    alert('Usuario creado con éxito e iniciado sesión.');
                    this.router.navigate(['/main'], { queryParams: { email } });
                  },
                  () => alert('Error al iniciar sesión con el nuevo usuario.')
                );
              },
              () => alert('Error al crear el usuario.')
            );
          }
        }
      );
    }
  }  

}
