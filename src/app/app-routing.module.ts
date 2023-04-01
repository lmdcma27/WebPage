import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { GlobalPageComponent } from './components/global-page/global-page.component';
import { PciComponent } from './components/pci/pci.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

const routes: Routes = [
  {path: '',component: GlobalPageComponent},
  {path: 'test',component: TestComponent},
  {path: 'test2',component: Test2Component},
  {path: 'projects/pci',component: PciComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
