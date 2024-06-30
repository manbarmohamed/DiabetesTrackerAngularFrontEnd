import { Routes } from '@angular/router';
import { UpdateGlycemieComponent } from './update-glycemie/update-glycemie.component';
import { GlycemieListComponent } from './glycemie-list/glycemie-list.component';

export const routes: Routes = [
    {path: 'update/:id', component: UpdateGlycemieComponent},
    {path: 'glycemie', component: GlycemieListComponent},
    {path: '',redirectTo: 'glycemie', pathMatch:'full'},
    {path: '**', component: GlycemieListComponent},
];
