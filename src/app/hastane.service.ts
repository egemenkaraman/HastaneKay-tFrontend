import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hastaEntity } from './hastaEntity';

@Injectable({
  providedIn: 'root'
})
export class HastaneService {
  private BASEurl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    const loginUrl = `${this.BASEurl}/loginHastane`;
    return this.http.post<string>(loginUrl, { username, password }, { responseType: 'text' as 'json' });
  }

  hastalar(): Observable<hastaEntity[]>{
    const hastalarURL = `${this.BASEurl}/getTable`;
    return this.http.get<hastaEntity[]>(hastalarURL)
  }

  addHasta(hasta: hastaEntity): Observable<hastaEntity> {
    const addhastaUrl =`${this.BASEurl}/hastaEkle`;
    return this.http.post<hastaEntity>(addhastaUrl, hasta);
  }

  deleteHasta(id: string): Observable<string> {
    const deleteUrl =`${this.BASEurl}/hastaSil`;
    return this.http.post<string>(deleteUrl, null, {
      params: { id }
    });
  }



}
