import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SiblingsComponent } from './siblings/siblings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'parent' },
  { path: 'parent', component: ParentComponent },
  { path: 'sibling', component: SiblingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
