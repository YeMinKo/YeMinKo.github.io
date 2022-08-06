import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from '../angular/angular.component';
import { CssComponent } from '../css/css.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/angular',
        pathMatch: 'full',
      },
      {
        path: 'angular',
        component: AngularComponent,
      },
      {
        path: 'css',
        component: CssComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
