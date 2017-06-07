import { Component } from '@angular/core';
import { User } from '../shared/models/user';


@Component({
    selector:"user-form",
    template:`
    <form>

        <div class="form-group">
            <input type="text" class="form-control" name="name" required>
        </div>

        <div class="form-group">
            <input type="text" class="form-control" name="username" required>
        </div>

        <button type="submit" class="btn btn-lg btn-block btn-primary">
            Create User
        </button>

    </form>
    `,
    styles:[`
    form {
        padding:10px;
        background:#E0F0F1;
        border-radius:3px;
    }

    `]
})

export class UserFormComponent{}