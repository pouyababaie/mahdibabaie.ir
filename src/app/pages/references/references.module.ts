import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from './references.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: ReferencesComponent,
  },
];

@NgModule({
  declarations: [ReferencesComponent],
  imports: [CommonModule,RouterModule.forChild(route)],
})
export class ReferencesModule {}
