import { Component } from '@angular/core';
import { User } from '../shared/models/user';


@Component({
    selector:"user-form",
    template:`
    <form #form="ngForm">

        {{form.valid}}

        <div class="form-group">
            <input type="text" class="form-control" name="name" required
            [(ngModel)]="newUser.name" #name="ngModel">
        </div>

        <div class="form-group">
            <input type="text" class="form-control" name="username" required
            [(ngModel)]="newUser.username" #name="ngModel">
        </div>

        <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
            Create User
        </button>

    </form>
    `,
    styles:[`
    form {
        padding:10px;
        background:#E0F0F1;
        border-radius:3px;
        margin-bottom:30px;
    }

    `]
})

export class UserFormComponent{
    newUser:User = new User();
}