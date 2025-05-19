import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaComponent } from './Aerolinea.component';
import { AerolineaListComponent } from './Aerolinea-list/Aerolinea-list.component';
import { AerolineaDetailComponent } from './Aerolinea-detail/Aerolinea-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AerolineaComponent, AerolineaListComponent, AerolineaDetailComponent],
  exports: [AerolineaComponent, AerolineaListComponent, AerolineaDetailComponent]
})
export class AerolineaModule { }
