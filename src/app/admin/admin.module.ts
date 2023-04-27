import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminsComponent } from './admins/admins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmersComponent } from './farmers/farmers.component';
import { CropsComponent } from './crops/crops.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';


@NgModule({
  declarations: [
    LandingComponent,
    AdminsComponent,
    DashboardComponent,
    FarmersComponent,
    CropsComponent,
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
