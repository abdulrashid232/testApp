import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagInterface } from '../types/tag.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http//localhost:3004";
  constructor(private http: HttpClient) {}

  getTag(): Observable<TagInterface> {
    return this.http.get<TagInterface>(this.apiUrl);
  }
  createTag(name: string): Observable<TagInterface>{

    return this.http.post<TagInterface>(this.apiUrl , name)

  }
}