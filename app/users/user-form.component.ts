import { Component } from '@angular/core';
import { User } from '../shared/models/user';


@Component({
    selector: "user-form",
    template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">

        {{form.valid}}

        <div class="form-group" [ngClass]="{'has-error':name.invalid && name.touched}">
            <input type="text" class="form-control" name="name" required
            [(ngModel)]="newUser.name" #name="ngModel" placeholder="Name">
            <span class="help-block" *ngIf="name.invalid && name.touched">Name is required!</span>
        </div>       

        <div class="form-group" [ngClass]="{'has-error':username.invalid && username.touched}">
            <input type="text" class="form-control" name="username" required
            [(ngModel)]="newUser.username" #username="ngModel" placeholder="Username">

            <span class="help-block" *ngIf="username.invalid && username.touched">Username is required!</span>
        </div>        

        <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
            Create User
        </button>

    </form>
    `,
    styles: [`
    form {
        padding:10px;
        background:#E0F0F1;
        border-radius:3px;
        margin-bottom:30px;
    }

    `]
})

export class UserFormComponent {
    newUser: User = new User();

    active: boolean = true;

    onSubmit() {
        this.newUser=new User();
        this.active=false;

        setTimeout(()=>this.active=true,0);
    }
}