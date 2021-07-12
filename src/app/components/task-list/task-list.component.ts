import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = [];
  task: string;
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(queryParams => {

      this.task = queryParams['task_number'];
      this.tasks = this.taskService.getTasks(this.task);
      console.log('Task: ' + this.task);
    })
    
    console.log(this.tasks);
    
  }
}
