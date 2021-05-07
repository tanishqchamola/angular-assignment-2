import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UsersRoutingModule } from "./users-routing.module";

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [ViewComponent, CreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
