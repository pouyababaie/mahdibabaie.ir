import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: EducationComponent,
  },
];

@NgModule({
  declarations: [EducationComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class EducationModule {}
