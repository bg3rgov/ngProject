import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';



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

  @ViewChild('expandableContent') expandableContent: ElementRef;
  @Input() task: Task;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  state = 'collapsed';
  toggle(): void {

    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
    this.expandableContent.nativeElement.classList.toggle('hidden-content');
    this.expandableContent.nativeElement.classList.toggle('expandableContent');        
  }

  openDialog(taskId: string, access_title: string) {



    let task: Task;
    this.taskService.getTask(taskId, access_title).subscribe((foundTask: Task) => {

      if(foundTask) task = foundTask;
      const dialogRef = this.dialog.open(NewOptionComponent, {

        data: task
      })
  
      dialogRef.afterClosed().subscribe(result => {
  
        console.log('The dialog was closed');
      })
    })

  }

  onDeleteTask(taskId: string){

    this.taskService.deleteTask(taskId);

  }
}


@Component({

  selector: 'new-option-component',
  templateUrl: 'new-option-dialog.html',
})
export class NewOptionComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data,
    public dialogRef: MatDialogRef<NewOptionComponent>,
    public taskService: TaskService
  ) {}
  onAddOption(figure_number: string, requiredPanels: string) {

    const option = {
      figure_number: figure_number,
      requiredPanels: requiredPanels
    }
    // console.log(this.data);
    // console.log(option);
    this.taskService.updateAccessRequirementOption(this.data.taskId,  this.data.access_requirement.access_title, option);
    this.closeDialog();
  }

  closeDialog() {

    this.dialogRef.close();
  }
}