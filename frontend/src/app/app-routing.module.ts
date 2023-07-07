import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WinnersComponent } from './winners/winners.component';
import { ToppersComponent } from './toppers/toppers.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UsersComponent },
  { path: 'winner', component: WinnersComponent },
  { path: 'topper', component: ToppersComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
