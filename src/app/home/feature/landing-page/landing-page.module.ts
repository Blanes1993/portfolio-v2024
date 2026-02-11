import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page.routing';
import { LandingModule } from '../../ui/landing/landing.module';
import { LandingPageComponent } from './landing-page.component';
import { ExtraContentModule } from '../../ui/extra-content/extra-content.module';
import { ProfileModule } from '../../ui/profile/profile.module';
import { WorkModule } from '../../ui/work/work.module';
import { ContactModule } from '../../ui/contact/contact.module';
import { FooterModule } from '../../ui/footer/footer.module';
import { ProjectsModule } from '../../ui/projects/projects.module';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    LandingModule,
    ExtraContentModule,
    ProfileModule,
    WorkModule,
    ContactModule,
    FooterModule,
    ProjectsModule
  ]
})
export class LandingPageModule { }
