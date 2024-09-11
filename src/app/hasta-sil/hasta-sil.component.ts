import { Component } from '@angular/core';
import { error } from 'console';
import { HastaneService } from '../hastane.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-hasta-sil',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './hasta-sil.component.html',
  styleUrl: './hasta-sil.component.css'
})
export class HastaSilComponent {
  id: string = '';
  message: string = '';
  
  constructor(private hastaneService: HastaneService, private router: Router) {}

  deleteHasta(){
    this.hastaneService.deleteHasta(this.id).subscribe({
      next: (response) => this.message = response,
      error: (err) => this.message = 'Hasta Başarıyla Silindi.'
    });
  }
  goBack() {
    this.router.navigate(['/anamenü']);
  }

}
