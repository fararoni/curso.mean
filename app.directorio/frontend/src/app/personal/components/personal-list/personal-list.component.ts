import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../interfaces/persona'
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styles: []
})

export class PersonalListComponent implements OnInit{
  personas$: Observable<Persona[]> = new Observable();
 
  constructor( private personasService: PersonaService){
    console.log('PersonalListComponent()');
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
    this.fetchPersonas();
  }
  private fetchPersonas(): void {
    console.log('fetchPersonas()');
    // this.personas = this.personasService.getPersonas();
    this.personas$ = this.personasService.getPersonas();
    console.log('-----fetchPersonas 1--------');
    console.log(this.personas$);
    console.log('-----fetchPersonas 2--------');
  }

  deletePersona(id:string): void {
    this.personasService.deletePersona(id).subscribe({
      next: () => this.fetchPersonas()
    })
  }
}

