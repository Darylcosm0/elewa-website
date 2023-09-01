import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';
import { ContentDevHeroSectionComponent } from '../../components/content-dev-hero-section/content-dev-hero-section.component';

export const ELEWA_CONTENT_DEVELOPMENT_ROUTES: Route[] = [

  { path: '', component: ContentDevelopmentPageComponent },
  { path: 'hero', component: ContentDevHeroSectionComponent },


];

@NgModule({
  imports: [RouterModule.forChild(ELEWA_CONTENT_DEVELOPMENT_ROUTES)],
  exports: [RouterModule]
})
export class ContentDevelopmentPageRoutingModule { }
