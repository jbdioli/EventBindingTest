import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ParentPage } from "./parent.page";
import { Child2Component } from "src/app/components/child2/child2.component";

const routes: Routes = [
  {
    path: "menu",
    component: ParentPage,
    children: [
      {
        path: 'Child',
        loadChildren: '../child1/child1.module#Child1PageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/Child',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParentPage, Child2Component]
})
export class ParentPageModule {}
