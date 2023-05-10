import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuildingPageComponent} from "./building-page/building-page.component";

const routes: Routes = [
  { path: '*', component: BuildingPageComponent },
  { path: '', component: BuildingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
