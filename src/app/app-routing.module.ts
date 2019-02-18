import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes} from '@angular/router';
import {ManfacturerComponent} from './manfacturer/manfacturer.component';
import {ModelsComponent} from './models/models.component';
import {ViewInventoryComponent} from './viewinventory/viewinventory.component';

export const routes: Routes=[
      { path: '', redirectTo: '/manufacturer', pathMatch: 'full' },
      { path: 'manufacturer', component: ManfacturerComponent },
      { path: 'models', component: ModelsComponent },
      { path: 'viewinventory', component: ViewInventoryComponent },
     
     
      
    ]

