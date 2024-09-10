import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnamenuComponent } from './anamenu/anamenu.component';
import { HastaSilComponent } from './hasta-sil/hasta-sil.component';
import { HastaEkleComponent } from './hasta-ekle/hasta-ekle.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'anamenü', component: AnamenuComponent },
    { path: 'hasta-sil', component: HastaSilComponent },
    { path: 'hasta-ekle', component: HastaEkleComponent },
    { path: '**', redirectTo: '' }



];
