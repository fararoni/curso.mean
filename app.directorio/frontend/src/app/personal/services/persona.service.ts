import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Persona } from '../interfaces/persona';
import { apiPersona } from '../interfaces/apiPersona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url = environment.apiUrl;
  private personas$: Subject<Persona[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshPersonas() {
    this.httpClient.get<apiPersona>(`${this.url}/directorio`)
    .subscribe( data => {
      this.personas$.next( data?.directorio);
      console.log('Respuesta de la API:', data);

    }, (error) => {
      console.error('Error al obtener datos:', error);
    });
   }
  
   getPersonas(): Subject<Persona[]> {
    console.log('----------------> Logging');
    this.refreshPersonas();
    console.log(this.personas$);
    return this.personas$;
  }
  
  getPersona(id: string): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.url}/directorio/${id}`);
  }

  createPersona(persona: Persona): Observable<string> {
    return this.httpClient.post(`${this.url}/directorio`, persona, { responseType: 'text' });
  }
  updatePersona(id: string, persona: Persona): Observable<string> {
    ///ok return this.httpClient.put(`${this.url}/directorio/${id}`, persona, { responseType: 'text' });
    return this.httpClient.put(`${this.url}/directorio/${id}`, persona, { responseType: 'text' });
   }
 
   deletePersona(id: string): Observable<string> {
     return this.httpClient.delete(`${this.url}/directorio/${id}`, { responseType: 'text' });
   }
}
