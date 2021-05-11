import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLoginComponent } from './modules/administrator/container-login/container-login.component'

const routes: Routes = [
  { path: '', component: ContainerLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
