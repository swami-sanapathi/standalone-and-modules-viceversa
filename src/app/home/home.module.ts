import { NgModule } from "@angular/core";
import { Home } from "./home.component";
import { SimpleStandaloneComponent } from "../simple-standalone.component";

@NgModule({
  exports: [Home],
  declarations: [Home],
  providers: [],
  imports: [SimpleStandaloneComponent],
})
export class HomeModule {}
