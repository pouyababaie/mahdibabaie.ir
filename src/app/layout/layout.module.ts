import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const modules = [SharedModule];
const components = [HeaderComponent, FooterComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules,RouterModule],
  exports: [...components, ...modules],
})
export class LayoutModule {}
