import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: ExperiencesComponent,
  },
];

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class ExperiencesModule {}
