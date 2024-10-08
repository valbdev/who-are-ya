import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoAreYaComponent } from './components/who-are-ya/who-are-ya.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
