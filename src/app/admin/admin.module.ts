import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHeaderComponent } from './partials/admin-header/admin-header.component';
import { AdminFooterComponent } from './partials/admin-footer/admin-footer.component';
import { TopBarComponent } from './partials/top-bar/top-bar.component';

// import { UserService } from './_core/services/user.service';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
    
  ],
  declarations: [AdminComponent, DashboardComponent, AdminHeaderComponent, AdminFooterComponent, TopBarComponent]
})
export class AdminModule implements OnInit {
  ngOnInit(){
  }
 }