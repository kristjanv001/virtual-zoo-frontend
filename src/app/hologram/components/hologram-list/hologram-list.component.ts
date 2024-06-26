import { Component, OnInit } from "@angular/core";
import { HologramService } from "../../services/hologram.service";
import { Hologram } from "../../models/hologram";

@Component({
  selector: "app-hologram-list",
  templateUrl: "./hologram-list.component.html",
  styleUrl: "./hologram-list.component.css",
})
export class HologramListComponent implements OnInit {
  holograms: Hologram[] = [];
  isRemoveDialogOpen = false;
  isComposerModalOpen = false;
  selectedHologram: Hologram | null = null;

  constructor(private hologramService: HologramService) {}

  ngOnInit(): void {
    this.getHolograms();
  }

  addHologram(hologram: Hologram) {
    this.hologramService.addHologram(hologram).subscribe((newHologram) => {
      this.holograms.push(newHologram);
      this.closeComposerModal();
    });
  }

  editHologram(updatePackage: any) { // ⚠️
    const { hologram, id } = updatePackage;
    this.hologramService.updateHologram(hologram, id).subscribe((updatedHologram) => {
      const index = this.holograms.findIndex((h) => h.id === updatedHologram.id);

      if (index !== -1) {
        this.holograms[index] = updatedHologram;
      }
    });
    this.closeComposerModal();
  }

  onRemoveConfirm(confirmation: boolean) {
    if (confirmation && this.selectedHologram) {
      this.holograms = this.holograms.filter((h) => h.id !== this.selectedHologram!.id);
      this.hologramService.deleteHologram(this.selectedHologram.id).subscribe();
      this.closeRemoveDialog();
    } else {
      this.closeRemoveDialog();
    }
  }

  openRemoveDialog(hologram: Hologram) {
    this.selectedHologram = hologram;
    this.isRemoveDialogOpen = true;
  }

  private closeRemoveDialog() {
    this.selectedHologram = null;
    this.isRemoveDialogOpen = false;
  }

  openComposerModal(hologram?: Hologram) {
    if (hologram) {
      this.selectedHologram = hologram;
    }
    this.isComposerModalOpen = true;
  }

  closeComposerModal() {
    this.selectedHologram = null;
    this.isComposerModalOpen = false;
  }

  private getHolograms(): void {
    this.hologramService.getHolograms().subscribe((holograms) => {
      this.holograms = holograms;
    });
  }
}
