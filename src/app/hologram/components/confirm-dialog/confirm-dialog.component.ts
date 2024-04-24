import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hologram } from "../../models/hologram";

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrl: "./confirm-dialog.component.css",
})
export class ConfirmDialogComponent {
  @Input() isOpen = false;
  @Input() hologram: Hologram | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  agree() {
    this.confirm.emit(true);
    this.hologram = null;
  }

  disagree() {
    this.confirm.emit(false);
    this.hologram = null;
  }
}
