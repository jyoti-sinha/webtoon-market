import { Injectable,
ComponentFactoryResolver,
ApplicationRef,
ComponentRef,
Injector,
EmbeddedViewRef,
Type
} from '@angular/core';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';
import { DialogComponent } from './dialog.component';
import { DialogInjector } from './dialog.injector';

@Injectable()
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  open(componentType:Type<any>, config: DialogConfig): void {
      const map = new WeakMap();
      map.set(DialogConfig, config);
      const dialogRef = new DialogRef();
      map.set(DialogRef, dialogRef);


      const factory = this.resolver.resolveComponentFactory(DialogComponent);
      const componentRef = factory.create(new DialogInjector(this.injector, map));
      this.appRef.attachView(componentRef.hostView);
      const domEl = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domEl);


      this.dialogComponentRef = componentRef;
      this.dialogComponentRef.instance.onClose.subscribe( => {

      });
      this.dialogComponentRef.instance.childTypeComponent = componentType;

  }

}