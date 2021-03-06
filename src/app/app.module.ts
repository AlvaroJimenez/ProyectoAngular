import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent} from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CochesComponent} from './coches/coches.component';
import {HttpClientModule} from '@angular/common/http';
import { PlantillasComponent} from './plantillas/plantillas.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
