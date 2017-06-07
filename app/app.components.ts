import { Component } from '@angular/core';
import {User} from './shared/models/user'

@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css']
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

    activeUser;

    selectUser(user){       
        this.activeUser=user;        
    };
}