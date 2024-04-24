import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { HologramListComponent } from "./components/hologram-list/hologram-list.component";
import { HologramCreatorComponent } from './components/hologram-creator/hologram-creator.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [HologramListComponent, HologramCreatorComponent, ConfirmDialogComponent],
  imports: [CommonModule, ClarityModule, BrowserAnimationsModule, ReactiveFormsModule],
  exports: [HologramListComponent],
})
export class HologramModule {}
