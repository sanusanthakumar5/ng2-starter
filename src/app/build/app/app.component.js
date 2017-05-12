"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent() {
        this.addEventForm = new forms_2.FormGroup({
            name: new forms_2.FormControl("", [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            description: new forms_2.FormControl("", forms_1.Validators.required),
            location: new forms_2.FormControl("", forms_1.Validators.required),
            date: new forms_2.FormControl("", forms_1.Validators.required),
            likes: new forms_2.FormControl(""),
            allow_update: new forms_2.FormControl("")
        });
        this.event_add_show = false;
        this.show_validation_erros = false;
        this.event = [
            {
                name: "Engagement",
                description: " 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
                location: "UK",
                date: "12th June 2017",
                likes: 1
            }, {
                name: "Birthday Party",
                description: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
                location: "London",
                date: "05th Dec 2017",
                likes: 2
            }, {
                name: "Wedding Party",
                description: " Release of Letraset sheets containing Lorem Ipsum passages",
                location: "Canada",
                date: "11th Nov 2017",
                likes: 0
            }
        ];
    }
    AppComponent.prototype.likesUp = function (postn) {
        // console.log(curnt_likes);
        //this.event.splice(postn,1);
        this.event[postn].likes += 1;
    };
    AppComponent.prototype.likesDown = function (postn) {
        // console.log(curnt_likes);
        //this.event.splice(postn,1);
        this.event[postn].likes -= 1;
    };
    AppComponent.prototype.enbleEvntAdd = function () {
        if (this.event_add_show == false) {
            this.event_add_show = true;
        }
        else {
            this.event_add_show = false;
        }
    };
    AppComponent.prototype.addEvent = function (event) {
        /** this.event.push(
           {
             name: name,
             description:desc,
             location: loctn,
             date: date,
             likes: Number(like)
           }
     
         )**/
        //console.log(this.addEventForm.value);
        //   console.log(this.addEventForm.valid);
        console.log(this.addEventForm.valid);
        if (this.addEventForm.valid) {
            this.event.unshift(this.addEventForm.value);
            this.addEventForm.reset();
            this.show_validation_erros = false;
        }
        else {
            this.show_validation_erros = true;
        }
        return false;
    };
    AppComponent.prototype.eventDelete = function (postn) {
        var tmp = confirm("Do you want to delete this ?");
        // console.log(tmp);
        if (tmp) {
            this.event.splice(postn, 1);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'event-zone',
        templateUrl: "/app/templates/event.template.html"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map