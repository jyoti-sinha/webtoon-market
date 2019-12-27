import { Observable, Subject } from 'rxjs';
import { DialogConfig } from './dialog-config';

export class DialogRef{
  
  


  constructor(){}

  close(result?: DialogConfig): void{
      this._afterClosed.next(result);
  }


  private readonly _afterClosed: Subject<any> = new Subject<any>() ;
  afterClosed: Observable<any> = this._afterClosed.asObservable();
}