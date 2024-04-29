import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { HologramListComponent } from "./components/hologram-list/hologram-list.component";
import { HologramComposerComponent } from "./components/hologram-composer/hologram-composer.component";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HologramListComponent, HologramComposerComponent, ConfirmDialogComponent],
  imports: [CommonModule, ClarityModule, BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, SharedModule],
  exports: [HologramListComponent],
})
export class HologramModule {}
