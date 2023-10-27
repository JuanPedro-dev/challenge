import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './view/dashboard/components/grid/grid.component';
import { NewGridComponent } from './newgrid/newgrid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./view/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./view/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./view/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: 'asdf', component: GridComponent, data: { text: 'grid' } },
  { path: 'newgrid', component: NewGridComponent, data: { text: 'newGrid' } },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
