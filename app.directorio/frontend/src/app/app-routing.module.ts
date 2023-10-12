import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalListComponent } from './personal/components/personal-list/personal-list.component';
import { AgregarPersonaComponent } from './personal/components/agregar-persona/agregar-persona.component';
import { EditPersonaComponent } from './personal/components/edit-persona/edit-persona.component';

const routes: Routes = [
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'personas', component: PersonalListComponent },
  { path: 'personas/nuevo', component: AgregarPersonaComponent },
  { path: 'personas/editar/:id', component: EditPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
