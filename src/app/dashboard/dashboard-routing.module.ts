import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormerComponent } from './product/former.component';
import { TrainingComponent } from './order/training.component';
import { MemberComponent } from './category/member.component';



import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'produits',
    component: FormerComponent
  },
  {
    path: 'categories',
    component: MemberComponent
  },
  {
    path: 'commandes',
    component: TrainingComponent
  }, 
  
  
  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
