import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'orderlist', component: OrderlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
