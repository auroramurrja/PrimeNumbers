import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimeNumbersService {

  baseApiUrl : string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }
  getPrimeNumbers( num: number):Observable<number[]>{
    return this.http.get<number[]>(this.baseApiUrl + '/primenumbers/GetPrimeNumbers/'+num);
  }
}
