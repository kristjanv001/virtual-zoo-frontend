import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "weightConversion",
})
export class WeightConversionPipe implements PipeTransform {
  transform(value: number): string {
    return `${value.toFixed(2)}`;
  }
}
