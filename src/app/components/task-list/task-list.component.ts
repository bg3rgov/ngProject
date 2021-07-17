import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  searchTask: string;
  tasksSub: Subscription;
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    
    this.route.queryParams
    .pipe(

      concatMap(queryParam => {

        
        if(queryParam.task_number) { return this.taskService.searchTask(queryParam.task_number) }
        else {

          return this.taskService.getTasks();
        }
      })
    )
    .subscribe((response: {message: string, tasks: Task[]}) => {

      this.tasks = response.tasks;
    })
    
    
    // this.taskService.getTasks();
    this.tasksSub = this.taskService.getTasksUpdatedListener().subscribe((tasks: Task[]) => {

      this.tasks = tasks;
    })

    
    
  }

  ngOnDestroy() {

    this.tasksSub.unsubscribe();
  }
}
