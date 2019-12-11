import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';
import { ChildPage } from './child/child.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'about',
    component: AboutPage,
    children: [
      {
        path: 'child',
        component: ChildPage
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
