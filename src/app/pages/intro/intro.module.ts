import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
];

@NgModule({
  declarations: [IntroComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class IntroModule {}
