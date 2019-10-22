import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AboutTaskComponent } from './components/about-task/about-task.component';

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'about-task', component: AboutTaskComponent }
];

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
