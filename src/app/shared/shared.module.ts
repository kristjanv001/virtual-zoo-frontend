import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { WeightConversionPipe } from "./pipes/weight-conversion.pipe";
import { MessagesComponent } from "./components/messages/messages.component";

@NgModule({
  declarations: [HeaderComponent, WeightConversionPipe, MessagesComponent],
  imports: [CommonModule, ClarityModule, BrowserAnimationsModule],
  exports: [HeaderComponent, WeightConversionPipe, MessagesComponent],
})
export class SharedModule {}
