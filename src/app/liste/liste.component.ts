import { Component, OnInit } from '@angular/core';
import { hastaEntity } from '../hastaEntity';
import { HastaneService } from '../hastane.service';
import { Route, Router } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule,HttpClientJsonpModule],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {
  hastalar: hastaEntity[] = [];

  constructor(private hastaneService: HastaneService, private router: Router) {}

  ngOnInit(): void {
    this.hastaneService.hastalar().subscribe(
      (hasta: hastaEntity[]) => {
        this.hastalar = hasta;
        console.log(hasta);
      },
      error => {
        console.error('Error',error);
      }
    );
  }
  goBack() {
    this.router.navigate(['/anamenü']);
  }

}
