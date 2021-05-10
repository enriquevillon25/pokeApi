import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
const routes: Routes = [

  {
    path: "  ",
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: "",
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    data: { preload: false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
