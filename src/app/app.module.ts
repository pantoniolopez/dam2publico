import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContadorModule } from './contador/components/contador.module';
import { HeroesModule } from './heroes/components/heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ContadorModule, HeroesModule, DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
