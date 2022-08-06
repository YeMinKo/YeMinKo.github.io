import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { AngularComponent } from '../angular/angular.component';
import { CssComponent } from '../css/css.component';

@NgModule({
  declarations: [HomeComponent, AngularComponent, CssComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
