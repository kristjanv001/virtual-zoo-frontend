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
  selectedHologram: Hologram | null = null

  constructor(private hologramService: HologramService) {}

  ngOnInit(): void {
    this.getHolograms();
  }

  addHologram(hologram: Hologram) {
    this.holograms.push(hologram);
  }




  // onConfirm and removeHologram need to be connected properly
  //



  onConfirm(confirmed: boolean) {
    console.log("confirmed? ---> ", confirmed)
    if (confirmed && this.selectedHologram) {
      this.hologramService.deleteHologram(this.selectedHologram.id).subscribe((hologram) => {
        this.holograms = this.holograms.filter((h) => h.id != hologram.id);
      })
    }

    this.selectedHologram = null;
    this.isConfirmDialogOpen = false;
  }

  removeHologram(hologram: Hologram) {
    this.selectedHologram = hologram
    this.isConfirmDialogOpen = true;

    // this.hologramService.deleteHologram(id).subscribe((hologram) => {
    //   this.holograms = this.holograms.filter((hologram) => hologram.id != id);
    // });

    // this.holograms = this.holograms.filter((hologram) => hologram.id != id)

    // this.hologramService.addHologram(this.hologramForm.getRawValue() as Hologram).subscribe((hologram) => {
    //   this.addHologramEvent.emit(hologram);
    // });
  }

  private getHolograms(): void {
    this.hologramService.getHolograms().subscribe((holograms) => {
      this.holograms = holograms;
    });
  }
}
