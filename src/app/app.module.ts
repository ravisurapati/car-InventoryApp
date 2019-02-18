import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ManfacturerComponent } from './manfacturer/manfacturer.component';
import { ViewInventoryComponent } from './viewinventory/viewinventory.component';
import { ModelsComponent } from './models/models.component';
import {ManufactureService} from './services/manufacture.service';
import {ModelService} from './services/model.service';
import {viewInventoryService} from './services/viewinventory.service';

@NgModule({
  declarations: [
    AppComponent,
    ManfacturerComponent,
    ViewInventoryComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ManufactureService,ModelService,viewInventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
