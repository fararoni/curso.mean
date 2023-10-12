import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';
 
@Component({
 selector: 'app-agregar-persona',
 templateUrl: './agregar-persona.component.html'
})
export class AgregarPersonaComponent {
 constructor(
   private router: Router,
   private personaService: PersonaService
 ) { }
 
 addPersona(persona: Persona) {
   this.personaService.createPersona(persona)
     .subscribe({
       next: () => {
         this.router.navigate(['/personas']);
       },
       error: (error) => {
         alert("Error al crear a la persona");
         console.error(error);
       }
     });
 }
}