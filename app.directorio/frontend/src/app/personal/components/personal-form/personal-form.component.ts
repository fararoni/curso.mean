import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Persona  } from '../../interfaces/persona'; // Importarlo de la interface
 
@Component({
 selector: 'app-personal-form',
 templateUrl:'./personal-form.component.html',
 styleUrls: ['./personal-form.component.css' ]
})
export class PersonalFormComponent implements OnInit {
 @Input()
 initialState: BehaviorSubject<Persona> = new BehaviorSubject({});
 
 @Output()
 formValuesChanged = new EventEmitter<Persona>();
 
 @Output()
 formSubmitted = new EventEmitter<Persona>();
 
 personaForm: FormGroup = new FormGroup({});
 
 constructor(private fb: FormBuilder) { }
 
 get nombrecompleto() { return this.personaForm.get('nombrecompleto')!; }
 get cargo() { return this.personaForm.get('cargo')!; }
 get puesto() { return this.personaForm.get('puesto')!; }
 
 ngOnInit() {
   this.initialState.subscribe(persona => {
     this.personaForm = this.fb.group({
      nombrecompleto: [ persona.nombrecompleto, [Validators.required] ],
      cargo: [ persona.cargo, [ Validators.required, Validators.minLength(5) ] ],
      puesto: [ persona.puesto, [Validators.required] ]
     });
   });
 
   this.personaForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
 }
 
 submitForm() {
   this.formSubmitted.emit(this.personaForm.value);
 }
}