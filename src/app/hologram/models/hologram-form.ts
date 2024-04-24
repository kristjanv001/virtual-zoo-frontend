import { FormControl } from "@angular/forms";

export interface HologramForm {
  name: FormControl<string>;
  weight: FormControl<number>;
  superPower: FormControl<string>;
  extinctSince: FormControl<number>;
}
