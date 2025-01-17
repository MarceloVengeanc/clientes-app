import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesAppComponent } from './clientes/clientes-app/clientes-app.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clientes-app', component: ClientesAppComponent }
];
