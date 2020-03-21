import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import {GetdetailsComponent} from './getdetails/getdetails.component'   


const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'edit', component: EditComponent},
{path: 'getdetails', component: GetdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents=[LoginComponent,RegisterComponent,EditComponent, GetdetailsComponent]

