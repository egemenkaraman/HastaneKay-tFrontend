import { Component } from '@angular/core';
import { HastaneService } from '../hastane.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anamenu',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule,HttpClientJsonpModule],
  templateUrl: './anamenu.component.html',
  styleUrl: './anamenu.component.css'
})
export class AnamenuComponent {

  constructor(private hastaneService: HastaneService, private router: Router) {}

  goListe(){
    this.router.navigate(['/liste']);
  }
  goHastaSil(){
    this.router.navigate(['/hasta-sil']);
  }
  goHastaEkle(){
    this.router.navigate(['/hasta-ekle']);
  }
  logout() {
    this.router.navigate(['']);
  }


}
