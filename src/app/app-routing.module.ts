import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VegetablesListComponent } from './vegetables-list/vegetables-list.component';
import { VegetablesStockComponent } from './vegetables-stock/vegetables-stock.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'vegetables-list',component:VegetablesListComponent},
  {path:'vegetables-stock',component:VegetablesStockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
