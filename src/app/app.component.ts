import { Component, importProvidersFrom } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HomeModule } from "./home/home.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeModule],
  template: ` <home /> `,
  styles: [],
})
export class AppComponent {
  title = "standalone-and-modules-viceversa";
}
