import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { productmodule } from './product/product.module';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    productmodule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
