import { Observable, Subject } from 'rxjs';

export class DialogRef{
  afterClosed: Observable<any>;
  private readonly _afterClosed: Subject<any>;

  constructor(){
    this._afterClosed = new Subject<any>();
    this.afterClosed = this._afterClosed.asObservable(); 
  }

  close(result?: any): void{
      this._afterClosed.next(result);
  }
}