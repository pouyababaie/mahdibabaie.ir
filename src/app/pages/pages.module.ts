import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: { animation: 'aboutPage' },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
    data: { animation: 'contactPage' },
  },
  {
    path: 'edu',
    loadChildren: () =>
      import('./education/education.module').then((m) => m.EducationModule),
    data: { animation: 'educationPage' },
  },
  {
    path: 'exp',
    loadChildren: () =>
      import('./experiences/experiences.module').then(
        (m) => m.ExperiencesModule
      ),
    data: { animation: 'experiencesPage' },
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
    data: { animation: 'portfolioPage' },
  },
  {
    path: 'ref',
    loadChildren: () =>
      import('./references/references.module').then((m) => m.ReferencesModule),
    data: { animation: 'refrencesPage' },
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
    data: { animation: 'skillsPage' },
  },
  {
    path: '',
    loadChildren: () =>
      import('./intro/intro.module').then((m) => m.IntroModule),
    data: { animation: 'introPage' },
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PagesModule {}
