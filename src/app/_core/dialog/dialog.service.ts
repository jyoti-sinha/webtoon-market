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

  open(componentType:Type<any>, config: DialogConfig) {
      const map = new WeakMap();
      map.set(DialogConfig, config);
      const dialogRef = new DialogRef();
      map.set(DialogRef, dialogRef);

      const dialog = dialogRef.afterClosed.subscribe(() => { 
          this.close();
          dialog.unsubscribe();
      })


      const factory = this.resolver.resolveComponentFactory(DialogComponent);
      const componentRef = factory.create(new DialogInjector(this.injector, map));
      this.appRef.attachView(componentRef.hostView);
      const domEl = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domEl);


      this.dialogComponentRef = componentRef;
      this.dialogComponentRef.instance.childTypeComponent = componentType;
      this.dialogComponentRef.instance.onClose.subscribe(() => {
          this.close();
      })

      
      return dialogRef;
  }

  close(): void {
      this.appRef.detachView(this.dialogComponentRef.hostView);
      this.dialogComponentRef.destroy();
  }

}