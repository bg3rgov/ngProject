import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Option } from 'src/app/models/access.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-access-details',
  templateUrl: './access-details.component.html',
  styleUrls: ['./access-details.component.css']
})
export class AccessDetailsComponent implements OnInit {

  task;
  options = [];

  constructor(
    
    private route: ActivatedRoute,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(queryParams => {

      this.taskService.getTask(queryParams.id, queryParams.access_title)
      .subscribe((response: {task_number: string, task_title: string, task_description: string, access_requirement:{access_title: string, options: Option[]}, taskId: string}) => {

        this.task = response;
        this.options = this.task.access_requirement.options;
      })
    })
  }
}
