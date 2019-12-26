import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';
import { InsertationpointDirective } from './insertationpoint.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogComponent, InsertationpointDirective],
  providers: [DialogService],
  exports: [DialogComponent, InsertationpointDirective],
  entryComponents: [DialogComponent]
})
export class DialogModule { }