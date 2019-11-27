import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './error/notfound.component';


import { AppRoutingModule } from './app-routing.module';
import { AuthguardService } from './_core/services/authguard.service';
import { LoginguardService } from './_core/services/loginguard.service';
import { RegisterComponent } from './register/register.component';


import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from './store/reducers/app.reducer';
import { UserEffectClass } from './store/effects/user.effect';

import { localStorageSync } from 'ngrx-store-localstorage';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['loggedUser'],
    rehydrate: true
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,
    //NGRX MODULES
    StoreModule.forRoot(appReducers, {metaReducers}),
    EffectsModule.forRoot([UserEffectClass]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
    //====
   ],
  declarations: [ AppComponent, LoginComponent, NotfoundComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthguardService, LoginguardService]
})
export class AppModule { }
