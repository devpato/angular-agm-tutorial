import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNg_O4VHVbCB9tUs4w5wX90yuvWyOpAA4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
