import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHeaderComponent } from './partials/admin-header/admin-header.component';
import { AdminFooterComponent } from './partials/admin-footer/admin-footer.component';
import { TopBarComponent } from './partials/top-bar/top-bar.component';

// import { UserService } from './_core/services/user.service';

import { DialogModule } from '../_core/dialog/dialog.module';
import { UserEditComponent } from './dashboard/user-edit/user-edit.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DialogModule
    
  ],
  declarations: [AdminComponent, DashboardComponent, AdminHeaderComponent, AdminFooterComponent, TopBarComponent, UserEditComponent],
  entryComponents: [UserEditComponent]
})
export class AdminModule implements OnInit {
  ngOnInit(){
  }
 }