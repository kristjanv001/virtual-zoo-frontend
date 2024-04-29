import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Hologram } from "../../models/hologram";

@Component({
  selector: "app-hologram-composer",
  templateUrl: "./hologram-composer.component.html",
})
export class HologramComposerComponent implements OnInit {
  @Input() isOpen = false;
  @Input() hologramToEdit: Hologram | null = null;
  @Output() addHologramEvent = new EventEmitter<Hologram>();
  @Output() editHologramEvent = new EventEmitter<any>(); // ⚠️
  @Output() cancelComposerEvent = new EventEmitter<void>();

  hologramForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.max(100)]),
    weight: new FormControl(1, [Validators.required, Validators.min(0), Validators.max(500_000)]),
    superPower: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(500)]),
    extinctSince: new FormControl("", [Validators.maxLength(500)]),
  });

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if (this.hologramToEdit) {
      console.log(this.hologramToEdit)
      this.hologramForm.patchValue(this.hologramToEdit)
    }
  }

  addHologram() {
    if (!this.hologramForm.invalid) {
      this.addHologramEvent.emit(this.hologramForm.getRawValue() as Hologram);
    }
  }

  editHologram() {
    if (!this.hologramForm.invalid && this.hologramToEdit) {

      const hologramToUpdate = {
        id: this.hologramToEdit.id,
        hologram: this.hologramForm.getRawValue()
      }
      this.editHologramEvent.emit(hologramToUpdate);
    }
  }

  cancel() {
    this.cancelComposerEvent.emit();
    this.hologramToEdit = null;
  }
}
