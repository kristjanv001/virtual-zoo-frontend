import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "weightConversion",
})
export class WeightConversionPipe implements PipeTransform {
  transform(value: string | number): number {
    if (typeof value === "number") {
      return value;
    }

    return parseFloat(value);
  }
}
