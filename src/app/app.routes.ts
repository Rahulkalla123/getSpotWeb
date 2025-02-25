import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component:PageNotFoundComponent
    }
];
const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled', 
};
@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

