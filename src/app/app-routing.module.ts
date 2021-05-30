import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './info/login/login.component';
import { ProductsComponent } from './info/products/products.component';
import { RegisterComponent } from './info/register/register.component';

const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path:'pro',component:ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
