import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule

  ],
  exports: [
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class SharedModule { }
