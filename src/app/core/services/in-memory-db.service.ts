import { Injectable } from "@angular/core";
import { Hologram } from "../models/hologram";
import { HologramModule } from "../../hologram/hologram.module";

@Injectable({
  providedIn: "root",
})
export class InMemoryDbService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const holograms: Hologram[] = [
      {
        no: 1,
        name: "T-Rex",
        weight: 8000,
        superPower: "Powerful jaws and sharp teeth",
        extinctSince: 66,
      },
      {
        no: 2,
        name: "Mammoth",
        weight: 6000,
        superPower: "Thick fur for cold climates",
        extinctSince: 4000,
      },
      {
        no: 3,
        name: "Dodo",
        weight: 10,
        superPower: "Flightless bird",
        extinctSince: 1662,
      },
      {
        no: 4,
        name: "Sabre-toothed Cat",
        weight: 400,
        superPower: "Massive curved teeth for hunting",
        extinctSince: 10000,
      },
    ];

    return { holograms };
  }
}
