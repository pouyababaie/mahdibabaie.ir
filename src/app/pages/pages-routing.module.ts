import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'edu',
    loadChildren: () =>
      import('./education/education.module').then((m) => m.EducationModule),
  },
  {
    path: 'exp',
    loadChildren: () =>
      import('./experiences/experiences.module').then(
        (m) => m.ExperiencesModule
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'ref',
    loadChildren: () =>
      import('./references/references.module').then((m) => m.ReferencesModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./intro/intro.module').then((m) => m.IntroModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
