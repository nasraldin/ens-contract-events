import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';

const routes: Routes = [{ path: '', component: EventListComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: false
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
