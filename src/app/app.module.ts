import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { HologramModule } from "./hologram/hologram.module";
import { InMemoryDbService } from "./core/services/in-memory-db.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HologramModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDbService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
