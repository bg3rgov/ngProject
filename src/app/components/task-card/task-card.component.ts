import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { NewOptionComponent } from '../new-option/new-option.component';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;
  @ViewChild('expandableContent') expandableContent: ElementRef;
  
  constructor(

    private taskService: TaskService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  state = 'collapsed';
  toggle(): void {

    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
    this.expandableContent.nativeElement.classList.toggle('hidden-content');
    this.expandableContent.nativeElement.classList.toggle('expandableContent');        
  }

  openDialog(taskId: string, accessId: string) {

    const access_requirement = this.task.access_requirements.find(access_requirement => 
      
      access_requirement._id === accessId
    )
    
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {

      taskId: this.task._id,
      task_number: this.task.task_number,
      access_requirement: access_requirement
    }

    const dialogRef = this.dialog.open(NewOptionComponent, dialogConfig);
  }

  onDeleteTask(taskId: string){

    this.taskService.deleteTask(taskId);
  }
}