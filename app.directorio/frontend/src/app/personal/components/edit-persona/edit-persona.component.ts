import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
})


export class EditPersonaComponent implements OnInit {
  persona: BehaviorSubject<Persona> = new BehaviorSubject({});
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personaService: PersonaService,
  ) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('edit-persona-component id:' + id )
    if (!id) {
      alert('No id provided');
    }
  
    this.personaService.getPersona(id !).subscribe((data: any) => {
     console.log('EditPersonaComponent.getPersona:')
     console.log(data?.persona)
      this.persona.next(data?.persona);
    });
  }
  
  editPersona(persona: Persona) {
    this.personaService.updatePersona(this.persona.value._id || '', persona)
      .subscribe({
        next: () => {
          this.router.navigate(['/personas']);
        },
        error: (error) => {
          alert('Failed to update persona');
          console.error(error);
        }
      })
  }
 }