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
        <div class='jumbotron'>
            <p>{{message}}</p>
            <h1>Welcome To Hell!!!</h1>
        </div>    

        <div *ngIf="users">
            <div *ngFor="let user of users" >
                {{user.name}} ({{user.username}})
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
}