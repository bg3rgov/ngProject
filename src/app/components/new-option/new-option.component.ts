import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { TaskService } from "src/app/services/task.service";


@Component({
    selector: 'app-new-option',
    templateUrl: './new-option.component.html',
    styleUrls: ['./new-option.component.css']
})

export class NewOptionComponent {

    data;
    message = '';
    constructor(
        @Inject(MAT_DIALOG_DATA) data,
        private taskService: TaskService,
        private router: Router,
        private dialogRef: MatDialogRef<NewOptionComponent>) {

        
        this.data = data;
    }

    onSubmit(form: NgForm) {
        
        if(form.invalid) {

            this.message = 'Figure number and Required Panels are mandatory fields!'
        }

        const taskId = this.data.taskId;
        const access_requirement_id = this.data.access_requirement._id;
        const access_title = this.data.access_requirement.access_title;
        const option = {

            figure_number: form.value.figure_number,
            requiredPanels: form.value.requiredPanels,
        };

        this.taskService.updateAccessRequirementOption(taskId, access_requirement_id, option)
        .subscribe(response => {

            console.log(response);
            this.close();
            this.router.navigate(['access-details'], {queryParams: {'id':taskId, 'access_title':access_title}})
        })
    }

    close() {

        this.dialogRef.close();
    }
}