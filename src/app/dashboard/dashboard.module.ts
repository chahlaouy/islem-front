import { NgModule, /** ADD THIS -> **/ CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module'
import { AngularMaterialModule } from '../angular-material/angular-material.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormerComponent } from './product/former.component';
import { TrainingComponent } from './order/training.component';
import { MemberComponent } from './category/member.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { SideNavBarModule } from '../side-nav-bar/side-nav-bar.module'


@NgModule({
  declarations: [
    DashboardComponent,
    FormerComponent,
    TrainingComponent,
    MemberComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    SideNavBarModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
