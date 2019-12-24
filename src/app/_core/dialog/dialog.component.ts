import { Component,
ComponentFactoryResolver,
Type,
ViewChild,
ComponentRef,
ChangeDetectorRef,
AfterViewInit,
OnDestroy,
ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

import { DialogConfig } from './dialog-config'; 
import { DialogRef } from './dialog-ref';
import { InsertationpointDirective } from './insertationpoint.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  private componentRef: ComponentRef<any>;
  @ViewChild(InsertationpointDirective, {static: false}) insertationpoint: InsertationpointDirective;
  childTypeComponent: Type<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private config: DialogConfig,
    private dialogRef: DialogRef
  ) { }

  ngAfterViewInit(){
      this.apendComponentToBody(this.childTypeComponent);
      this.cdr.detectChanges();
  }

  ngOnDestroy() {
    if(this.componentRef){
      this.componentRef.destroy();
    }
  }

  apendComponentToBody(componentType: Type<any>): void{
    const factory = this.resolver.resolveComponentFactory(componentType);
    const viewContainerRef = (<ViewContainerRef>this.insertationpoint.viewContainerRef);
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(factory);
  }

}