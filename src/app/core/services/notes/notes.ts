import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { INotes } from '../../interfaces/notes.interface';

@Injectable({
  providedIn: 'root',
})
export class Notes {
  httpClient = inject(HttpClient);

  constructor() {}

  getNotes(): Observable<INotes> {
    return this.httpClient.get<INotes>(`${environment.baseUrl}/notes/allNotes`);
  }

  getUserNotes(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/notes`);
  }

  addNotes(data: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/notes`, data);
  }

  updateNote(data: any, noteId: string): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}/notes/${noteId}`, data);
  }

  deleteNote(noteId: string): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/notes/${noteId}`);
  }
}
