import { Observable, BehaviorSubject } from 'rxjs'

export class Store<T>{
  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialSatte: T){
    this._state$ = new BehaviorSubject<T>(initialSatte);
    this.state$ = this._state$.asObservable();
  }

  get state(){
    return this._state$.getValue();
  }

  protected setState(saveState): void{
    console.log('=============== Previous state ==============', this.state);
    this._state$.next(saveState);
    console.log('=============== Current state ==============', this.state);
  }


}