import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ClarityModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
