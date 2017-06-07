import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.components';
import { UserProfileComponent } from "./users/user-profile.component";
import { UserFormComponent } from './users/user-form.component';

@NgModule ({
    imports:[BrowserModule ,FormsModule],
    declarations:[AppComponent,UserProfileComponent,UserFormComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}