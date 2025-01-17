import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    RouterLink,

  ]
})
export class ClientesModule { }
