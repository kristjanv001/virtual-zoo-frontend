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
  isConfirmDialogOpen = false;
  selectedHologram: Hologram | null = null;

  constructor(private hologramService: HologramService) {}

  ngOnInit(): void {
    this.getHolograms();
  }

  addHologram(hologram: Hologram) {
    this.holograms.push(hologram);
  }

  openConfirmDialog(hologram: Hologram) {
    this.selectedHologram = hologram;
    this.isConfirmDialogOpen = true;
  }

  private closeConfirmDialog() {
    this.selectedHologram = null;
    this.isConfirmDialogOpen = false;
  }

  onConfirm(confirmation: boolean) {
    if (confirmation && this.selectedHologram) {
      this.holograms = this.holograms.filter((h) => h.id !== this.selectedHologram!.id);
      this.hologramService.deleteHologram(this.selectedHologram.id).subscribe();
      this.closeConfirmDialog();
    } else {
      this.closeConfirmDialog();
    }
  }

  private getHolograms(): void {
    this.hologramService.getHolograms().subscribe((holograms) => {
      this.holograms = holograms;
    });
  }
}
