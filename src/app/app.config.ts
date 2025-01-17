import { ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './modules/services/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes), 
        provideAnimationsAsync(),
        importProvidersFrom(HttpClientModule),
        provideHttpClient(withInterceptors([authInterceptor]))
    ]
};
