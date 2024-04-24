import { Injectable } from "@angular/core";
import { Hologram } from "../../hologram/models/hologram";

@Injectable({
  providedIn: "root",
})
export class InMemoryDbService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const holograms: Hologram[] = [
      {
        id: 1,
        name: "T-Rex",
        weight: 8000,
        superPower: "Powerful jaws and sharp teeth",
        extinctSince: "66 million years ago",
      },
      {
        id: 2,
        name: "Mammoth",
        weight: 6000,
        superPower: "Thick fur for cold climates",
        extinctSince: "4000 years ago",
      },
      {
        id: 3,
        name: "Dodo",
        weight: 10,
        superPower: "Flightless bird",
        extinctSince: "Late 17th century",
      },
      {
        id: 4,
        name: "Sabre-toothed Cat",
        weight: 400,
        superPower: "Massive curved teeth for hunting",
        extinctSince: "Towards the end of the Pleistocene epoch",
      },
    ];

    return { holograms };
  }

  genId(holograms: Hologram[]): number {
    return holograms.length > 0 ? Math.max(...holograms.map((hologram) => hologram.id)) + 1 : 11;
  }
}
