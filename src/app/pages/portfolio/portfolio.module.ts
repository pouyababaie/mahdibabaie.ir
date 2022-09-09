import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class PortfolioModule {}
