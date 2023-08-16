import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
    { path: '',  },
  
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(PROFILE_ROUTES)],
    exports: [],
  })
  export class CardsRoutesModule {}