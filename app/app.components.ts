import { Component } from '@angular/core';
import {User} from './shared/models/user'

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">My Hell!!!</a>
            </div>
        </nav>
    </header>

    <main>

        <div class="row">

            <div class="col-sm-4">

                 <div *ngIf="users">
                    <ul class="list-group users-list">
                        <li  class="list-group-item" 
                        *ngFor="let user of users" 
                        (click)="selectUser(user)" 
                        [class.active]="user===activeUser">{{user.name}} ({{user.username}})</li>
                    </ul>
                </div>

            </div>

            <div class="col-sm-8">

                <div class='jumbotron' *ngIf="activeUser">
                    <p>{{message}}</p>
                    <h6>Welcome To Hell!!!</h6>
                    <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>
                </div> 

                <div class='jumbotron' *ngIf="!activeUser">
                    <p>{{message}}</p>
                    <h6>Welcome To Hell!!!</h6>
                    <span class="glyphicon glyphicon-hand-left"></span>
                    <h2>Choose a User</h2>
                </div> 

            </div>

        </div>        

    </main>    

    <footer class="text-center">
        CopyRight &copy; 2017
    </footer>
    `,
    styles: [`
    .users-list li{
        cursor:pointer;
    }

    .jumbotron .glyphicon{
        font-size:80px;
    }
    `]
})

export class AppComponent {

    message = 'Hello everyone!!!';

    users:User[] = [
        { id: 25, name: 'Rahul R', username: 'hellboyz' },
        { id: 22, name: 'Anway K', username: 'rookie' },
        { id: 21, name: 'Vishal L', username: 'bhabha' },
        { id: 26, name: 'Vineed P', username: 'geek' },
        { id: 20, name: 'Jayant D', username: 'JD' },
        { id: 23, name: 'Kirit G', username: 'raju' }
    ];

    activeUser=User;

    selectUser(user){       
        this.activeUser=user;        
    };
}