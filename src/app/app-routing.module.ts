import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'sign/:name', component: SignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ZodiacV2RoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
