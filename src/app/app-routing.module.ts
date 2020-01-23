import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'base' },
  { path: 'base', component: BaseComponent },
  { path: 'user', component: UserComponent, data: { userName: 'value' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
