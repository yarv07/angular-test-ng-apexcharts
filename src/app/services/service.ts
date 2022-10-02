import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) {};

  getBooks() {
    return this.http.get<[]>(`https://fakerestapi.azurewebsites.net/api/v1/Books`);
  };
}
