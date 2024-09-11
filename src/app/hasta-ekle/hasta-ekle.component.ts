import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { hastaEntity } from '../hastaEntity';
import { HastaneService } from '../hastane.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-hasta-ekle',
  standalone: true,
  imports: [FormsModule,  HttpClientModule, CommonModule,HttpClientJsonpModule,ReactiveFormsModule],
  templateUrl: './hasta-ekle.component.html',
  styleUrl: './hasta-ekle.component.css'
})
export class HastaEkleComponent implements OnInit {
  hasta!: hastaEntity;
  userForm: FormGroup

constructor(private fb: FormBuilder,private hastaneService: HastaneService, private router: Router){
  this.userForm = this.fb.group({
    id: ['',Validators.required],
    isim: ['',Validators.required],
    soyisim: ['',Validators.required],
    dogumtarihi: ['',Validators.required],
    cinsiyet: ['',Validators.required],
    telefon: ['',Validators.required],
    mail: ['',Validators.required],
    adres: ['',Validators.required],
    kayit_tarihi: ['',Validators.required],
    kimlik: ['',Validators.required]
  });
}

onSubmit() {
  if(this.userForm.valid){
    const hasta: hastaEntity = this.userForm.value;
    this.hastaneService.addHasta(hasta).subscribe({
      next: (response) => {
        console.log('hasta başarıyla eklendi',response);
        this.router.navigate(['/anamenü']);
      },
      error: (error) => {
        console.error('bir hata oluştu hasta eklenemedi',error);
      }
    });
  }
}

  ngOnInit(): void {
    this.onSubmit();
  }

  goBack() {
    this.router.navigate(['/anamenü']);
  }
}
