import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonalListComponent } from './personal/components/personal-list/personal-list.component';
import { PersonalFormComponent } from './personal/components/personal-form/personal-form.component';
import { AgregarPersonaComponent } from './personal/components/agregar-persona/agregar-persona.component';
import { EditPersonaComponent } from './personal/components/edit-persona/edit-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalListComponent,
    PersonalFormComponent,
    AgregarPersonaComponent,
    EditPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
