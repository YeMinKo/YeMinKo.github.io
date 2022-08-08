import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
  ],
})
export class MaterialModule {}
