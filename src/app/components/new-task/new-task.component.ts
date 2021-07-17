import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  access_requirements;
  @ViewChild('accessButton', { read: ElementRef }) accessButton: ElementRef;
  lastRow: number = 0;


  constructor(
    private taskService: TaskService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.initForm();
  }

  onSubmit() {

  
    let task_number = this.newTaskForm.value.task_number;
    let task_title = this.newTaskForm.value.task_title;
    let task_description = this.newTaskForm.value.task_description;
    let access_requirements = this.newTaskForm.value.access_requirements;
    this.taskService.createTask(task_number, task_title, task_description, access_requirements);
    this.router.navigate(['/tasks']);
  }

  get controls() { // a getter!

    return (<FormArray>this.newTaskForm.get('access_requirements')).controls;
  }

  manageFields() {

    console.log(this.accessButton.nativeElement.dataset.value);
    
    let action:string = this.accessButton.nativeElement.dataset.value;
    

    this.lastRow = this.access_requirements.length - 1;
    if(action === '+') {

      this.onAddAccessRequirement();
    } else if(action === '-') {

      this.onRemoveAccessRequirements(this.lastRow);
    }
    
  }

  onAddAccessRequirement() {

    this.lastRow++;
    (<FormArray>this.newTaskForm.get('access_requirements')).push(

      new FormGroup({

        'access_title': new FormControl(null, Validators.required)
      })
    )
  }

  onRemoveAccessRequirements(accessIndex: number) {
   
    this.access_requirements.removeAt(accessIndex)
    this.lastRow = this.access_requirements.length-1;
  }


  private initForm() {

    let task_number = '';
    this.access_requirements = new FormArray([

      new FormGroup({

        'access_title': new FormControl(null, Validators.required)
      })
    ]);

    this.newTaskForm = new FormGroup({

      'task_number': new FormControl(task_number, Validators.required),
      'task_title': new FormControl(task_number, Validators.required),
      'task_description': new FormControl(task_number, Validators.required),
      'access_requirements': this.access_requirements
    });
  }

}
