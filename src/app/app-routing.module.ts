import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDetailsComponent } from './components/access-details/access-details.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [

  { path: '', component: TaskListComponent },
  { path: 'access-details', component: AccessDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
