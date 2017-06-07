import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.components';
import { UserProfileComponent } from "./users/user-profile.component";

@NgModule ({
    imports:[BrowserModule ,FormsModule],
    declarations:[AppComponent,UserProfileComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}