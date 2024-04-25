import { Component, Output, EventEmitter, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HologramService } from "../../services/hologram.service";
import { Hologram } from "../../models/hologram";

@Component({
  selector: "app-hologram-creator",
  templateUrl: "./hologram-creator.component.html",
  styleUrl: "./hologram-creator.component.css",
})
export class HologramCreatorComponent {
  @Output() addHologramEvent = new EventEmitter<Hologram>();

  opened = false;
  hologramForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.max(100)]),
    weight: new FormControl(1, [Validators.required, Validators.min(0), Validators.max(200000000)]),
    superPower: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(500)]),
    extinctSince: new FormControl("", [Validators.maxLength(500)]),
  });

  constructor(private hologramService: HologramService) {}

  addHologram() {
    if (!this.hologramForm.invalid) {
      this.hologramService.addHologram(this.hologramForm.getRawValue() as Hologram).subscribe((hologram) => {
        this.addHologramEvent.emit(hologram);
      });

      this.hologramForm.reset();
      this.closeModal();
    }
  }

  openModal() {
    this.opened = true;
  }

  closeModal() {
    this.opened = false;
  }
}
