import { Routes } from "@angular/router";
import { LoginComponent } from './modules/pages/login/login.component';
import { MainComponent } from './modules/pages/main/main.component';

export const routes: Routes = [
    { 
        path: '', redirectTo: 'login', pathMatch: 'full' 
    },
    { 
        path: 'login', component: LoginComponent 
    },
    { 
        path: 'main', component: MainComponent 
    },
    { 
        path: '**', redirectTo: 'login' },
    {
        path: "home",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadComponent: () => import("./modules/example-page/example-page.component").then((m) => m.ExamplePageComponent)
    }
];
