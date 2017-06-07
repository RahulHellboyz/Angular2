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
        template: "\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n                <a href=\"/\" class=\"navbar-brand\">My Hell!!!</a>\n            </div>\n        </nav>\n    </header>\n\n    <main>\n\n        <div class=\"row\">\n\n            <div class=\"col-sm-4\">\n\n                 <div *ngIf=\"users\">\n                    <ul class=\"list-group users-list\">\n                        <li  class=\"list-group-item\" \n                        *ngFor=\"let user of users\" \n                        (click)=\"selectUser(user)\" \n                        [class.active]=\"user===activeUser\">{{user.name}} ({{user.username}})</li>\n                    </ul>\n                </div>\n\n            </div>\n\n            <div class=\"col-sm-8\">\n\n                <div class='jumbotron' *ngIf=\"activeUser\">\n                    <p>{{message}}</p>\n                    <h6>Welcome To Hell!!!</h6>\n                    <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>\n                </div> \n\n                <div class='jumbotron' *ngIf=\"!activeUser\">\n                    <p>{{message}}</p>\n                    <h6>Welcome To Hell!!!</h6>\n                    <span class=\"glyphicon glyphicon-hand-left\"></span>\n                    <h2>Choose a User</h2>\n                </div> \n\n            </div>\n\n        </div>        \n\n    </main>    \n\n    <footer class=\"text-center\">\n        CopyRight &copy; 2017\n    </footer>\n    ",
        styles: ["\n    .users-list li{\n        cursor:pointer;\n    }\n\n    .jumbotron .glyphicon{\n        font-size:80px;\n    }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.components.js.map