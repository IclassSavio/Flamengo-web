
import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { HeroDetailComponent } from './app/hero-detail/hero-detail.component';

// ...

@NgModule({
  declarations: [ HeroDetailComponent
    // Seus componentes aqui
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione FormsModule aos imports
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }

