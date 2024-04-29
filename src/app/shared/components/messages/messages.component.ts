import { Component } from "@angular/core";
import { MessagesService } from "../../../core/services/messages.service";
import { trigger, transition, style, animate } from "@angular/animations";

const fadeInOutAnimation = trigger("fadeInOut", [
  transition(":enter", [style({ opacity: 0 }), animate("0.5s", style({ opacity: 1 }))]),
  transition(":leave", [animate("0.5s", style({ opacity: 0 }))]),
]);

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrl: "./messages.component.css",
  animations: [fadeInOutAnimation],
})
export class MessagesComponent {
  constructor(public messageService: MessagesService) {}
}
