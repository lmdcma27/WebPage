import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { GlobalPageComponent } from './components/global-page/global-page.component';
import { CpiComponent } from './components/cpi/cpi.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { ElasticDockerComponent } from './components/elastic-docker/elastic-docker.component';
import { CvComponent } from './components/cv/cv.component';
const routes: Routes = [
  {path: '',component: GlobalPageComponent},
  {path: 'test',component: TestComponent},
  {path: 'test2',component: Test2Component},
  {path: 'projects/cpi',component: CpiComponent},
  {path: 'projects/elastic-docker',component:ElasticDockerComponent},
  {path: 'cv',component:CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
