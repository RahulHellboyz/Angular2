import { Component } from '@angular/core';

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
                        <li *ngFor="let user of users" class="list-group-item" (click)="selectUser(user)">{{user.name}} ({{user.username}})</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-8">
                <div class='jumbotron'>
                    <p>{{message}}</p>
                    <h1>Welcome To Hell!!!</h1>
                </div> 
            </div>

        </div>        

    </main>    

    <footer class="text-center">
        CopyRight &copy; 2017
    </footer>
    `,
    styles: [`
    .jumbotron {box-shadow : 0 2px 0 rgba(0,0,0,0.2);}
    `]
})

export class AppComponent {

    message = 'Hello everyone!!!';

    users = [
        { id: 25, name: 'Rahul R', username: 'hellboyz' },
        { id: 22, name: 'Anway K', username: 'rookie' },
        { id: 21, name: 'Vishal L', username: 'bhabha' },
        { id: 26, name: 'Vineed P', username: 'geek' },
        { id: 20, name: 'Jayant D', username: 'JD' },
        { id: 23, name: 'Kirit G', username: 'raju' }
    ];

    activeUser;

    selectUser(user){       
        this.activeUser=user;        
    };
}