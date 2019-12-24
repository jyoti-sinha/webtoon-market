import { Component, OnInit,
ComponentFactoryResolver,
Type,
ViewChild,
ComponentRef,
ChangeDetectorRef,
ViewContainerRef,
AfterViewInit,
OnDestroy } from '@angular/core';
import { InsertationpointDirective } from './insertationpoint.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}