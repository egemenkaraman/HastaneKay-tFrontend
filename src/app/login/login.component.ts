import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HastaneService } from '../hastane.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule,HttpClientJsonpModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginStatus: string = '';

  constructor(private hastaneService: HastaneService, private router: Router) { }
  login() {
    this.hastaneService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login response:', response);
        if (response === 'Login Success') {
          this.loginStatus = response;
          this.router.navigate(['/anamenü']); 
        } else {
          this.loginStatus = 'Login Failed';
          console.log('Login failed: Response did not indicate success.');
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        this.loginStatus = 'Login Failed';
        console.log('Error details:', err);
      }
    });
  }

  goAnaMenü(){
    this.router.navigate(['/anamenü']);
  }

}
