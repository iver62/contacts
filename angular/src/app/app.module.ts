import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsService } from "../services/contacts.service";
import { ContactsComponent } from "./contacts/contacts.component";
import { NewContactComponent } from './new-contact/new-contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
