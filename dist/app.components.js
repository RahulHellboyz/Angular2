"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello everyone!!!';
        this.users = [
            { id: 25, name: 'Rahul R', username: 'hellboyz' },
            { id: 22, name: 'Anway K', username: 'rookie' },
            { id: 21, name: 'Vishal L', username: 'bhabha' },
            { id: 26, name: 'Vineed P', username: 'geek' },
            { id: 20, name: 'Jayant D', username: 'JD' },
            { id: 23, name: 'Kirit G', username: 'raju' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n                <a href=\"/\" class=\"navbar-brand\">My Hell!!!</a>\n            </div>\n        </nav>\n    </header>\n\n    <main>\n\n        <div class=\"row\">\n\n            <div class=\"col-sm-4\">\n                 <div *ngIf=\"users\">\n                    <ul class=\"list-group users-list\">\n                        <li *ngFor=\"let user of users\" class=\"list-group-item\" (click)=\"selectUser(user)\">{{user.name}} ({{user.username}})</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"col-sm-8\">\n                <div class='jumbotron'>\n                    <p>{{message}}</p>\n                    <h1>Welcome To Hell!!!</h1>\n                </div> \n            </div>\n\n        </div>        \n\n    </main>    \n\n    <footer class=\"text-center\">\n        CopyRight &copy; 2017\n    </footer>\n    ",
        styles: ["\n    .jumbotron {box-shadow : 0 2px 0 rgba(0,0,0,0.2);}\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map