import { Injectable } from "@angular/core";
import { Message } from "../models/message";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  message: Message | null = null;

  constructor() {}

  add(text: string, type: "success" | "info" | "warning" | "danger" = "info", duration = 5000) {
    this.message = { text, type, duration };
    setTimeout(() => {
      this.clear();
    }, duration);
  }

  clear() {
    this.message = null;
  }
}
