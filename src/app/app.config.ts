import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { HomeModule } from "./home/home.module";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HomeModule)],
};
