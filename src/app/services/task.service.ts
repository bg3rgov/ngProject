import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { _getOptionScrollPosition } from '@angular/material/core';
import { Observable, Subject } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Option } from '../models/access.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private tasks: Task[] = [

  //   {
  //     task_number: '200171-01-1',
  //     task_title: 'AFT CABIN UNDERFLOOR COMPARTMENT',
  //     task_description: 'Cleaning Of Ewis Installed In The Aft Cabin Underfloor Compartment (Only If Contaminated)(ewis)',
  //     access_requirements: [
  //       {
  //         access_title: 'AFT Cabin Floor Panels',
  //         options: [
  //           {
  //             access_description: 'Cabin floor panels frame 66 to 68',
  //             figure_number:'06-41-53-000-000-A', 
  //             requiredPanels: '111A, 111B'
  //           },

  //           {
  //             access_description: 'Cabin floor panels frame 66 to 68',
  //             figure_number: '06-41-53-000-000-B',
  //             requiredPanels: '222A, 222B'
  //           }
  //         ]
  //       },
  //       {
  //         access_title: 'AFT Cargo Compartment Ceiling Panels',
  //         options: [
  //           {
  //             access_description: 'Cargo ceiling panels frame 36 to 54',
  //             figure_number:'06-41-53-111-111-A', 
  //             requiredPanels: '101A, 101B'
  //           },

  //           {
  //             access_description: 'Cargo ceiling panels frame 36 to 54',
  //             figure_number: '06-41-53-111-111-B',
  //             requiredPanels: '202A, 202B'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     task_number: '531191-01-1',
  //     task_title: 'AFT FACE OF FWD PRESSURE BULKHEAD',
  //     task_description: 'DETAILED INSPECTION OF AFT FACE OF FORWARD PRESSURE BULKHEAD, BELOW COCKPIT FLOOR LEVEL, INCLUDING FR 1 AND STRINGER CONNECTIONS NOTE: IF CORROSION IS FOUND ON THE PRESSURE BULKHEAD ABOVE THE AVIONICS FLOOR PANELS THE COMPLETE AFT FACE (UPPER AND LOWER AREAS) OF THE PRESSURE BULKHEAD IS TO BE INSPECTED',
  //     access_requirements: [
  //       {
  //         access_title: 'Avionics Bay floor palens',
  //         options: [
  //           {
  //             access_description: 'Avionics compartment floor panels',
  //             figure_number:'06-41-53-AVI-AVI-A', 
  //             requiredPanels: 'AVI1, AVI2'
  //           },

  //           {
  //             access_description: 'Avionics compartment floor panels',
  //             figure_number: '06-41-53-AVI-AVI-A-AVI-B',
  //             requiredPanels: '2AVI1, 2AVI2'
  //           }
  //         ]
  //       },
  //     ]
  //   },
  //   {
  //     task_number: '200171-01-2',
  //     task_title: 'AFT CABIN UNDERFLOOR COMPARTMENT',
  //     task_description: 'Cleaning Of Ewis Installed In The Aft Cabin Underfloor Compartment (Only If Contaminated)(ewis)',
  //     access_requirements: [
  //       {
  //         access_title: 'AFT Cabin Floor Panels',
  //         options: [
  //           {
  //             access_description: 'Cabin floor panels frame 46 to 68',
  //             figure_number:'06-41-53-000-000-A', 
  //             requiredPanels: '111A, 111B'
  //           },

  //           {
  //             access_description: 'Cabin floor panels frame 46 to 68',
  //             figure_number: '06-41-53-000-000-B',
  //             requiredPanels: '222A, 222B'
  //           }
  //         ]
  //       },
  //       {
  //         access_title: 'AFT Cargo Compartment Ceiling Panels',
  //         options: [
  //           {
  //             access_description: 'Cargo ceiling panels frame 36 to 54',
  //             figure_number:'06-41-53-111-111-A', 
  //             requiredPanels: '101A, 101B'
  //           },

  //           {
  //             access_description: 'Cargo ceiling panels frame 36 to 54',
  //             figure_number: '06-41-53-111-111-B',
  //             requiredPanels: '202A, 202B'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     task_number: '531191-01-1',
  //     task_title: 'AFT FACE OF FWD PRESSURE BULKHEAD',
  //     task_description: 'DETAILED INSPECTION OF AFT FACE OF FORWARD PRESSURE BULKHEAD, BELOW COCKPIT FLOOR LEVEL, INCLUDING FR 1 AND STRINGER CONNECTIONS NOTE: IF CORROSION IS FOUND ON THE PRESSURE BULKHEAD ABOVE THE AVIONICS FLOOR PANELS THE COMPLETE AFT FACE (UPPER AND LOWER AREAS) OF THE PRESSURE BULKHEAD IS TO BE INSPECTED',
  //     access_requirements: [
  //       {
  //         access_title: 'Avionics Bay floor palens',
  //         options: [
  //           {
  //             access_description: 'Avionics compartment floor panels',
  //             figure_number:'06-41-53-AVI-AVI-A', 
  //             requiredPanels: 'AVI1, AVI2'
  //           },

  //           {
  //             access_description: 'Avionics compartment floor panels',
  //             figure_number: '06-41-53-AVI-AVI-A-AVI-B',
  //             requiredPanels: '2AVI1, 2AVI2'
  //           }
  //         ]
  //       },
  //     ]
  //   }
  // ]
  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();


  constructor(private http: HttpClient) { }

  getTasksUpdatedListener() {

    return this.tasksUpdated.asObservable();
  }

  // searchTask(task: string) {

  //   const query = `?task_number=${task}`;
  //   console.log(query);
    
  //   return this.http.get<Task>('http://localhost:3000/api/tasks/' + query);
  // }

  getTasks(task_number='') {

    const query = `?task_number=${task_number}`;
    console.log(query);
    
    // if(!searchtask) return this.tasks;
    // return this.tasks.filter(t => t.task_number.includes(searchtask));
    return this.http.get<{message: string, tasks: Task[]}>('http://localhost:3000/api/tasks' + query);
    // .subscribe(response => {

    //   this.tasks = response.tasks;
    //   this.tasksUpdated.next([...this.tasks])
    // });
    
  }

  createTask(task_number: string, task_title: string, task_description: string, access_requirements: []) {

    let newTask = new Task (
      
      task_number,
      task_title,
      task_description,
      access_requirements,
    );
    
    this.http.post<{message: string, task: Task}>('http://localhost:3000/api/tasks/create', newTask)
    .subscribe(response => {

      console.log(response);
    })
  }

  deleteTask(taskId: string) {

    this.http.delete('http://localhost:3000/api/tasks/' + taskId)
    .pipe(

      concatMap(response => this.getTasks())
    )
    .subscribe((response: {message: string, tasks: Task[]}) => {

      this.tasks = response.tasks;
      this.tasksUpdated.next([...this.tasks])
    })
  }

  getTask(taskId: string, access_title: string) {

    const queryParams = `?access_title=${access_title}`
    return this.http.get(`http://localhost:3000/api/tasks/${taskId}${queryParams}`);
  }

  updateAccessRequirementOption(taskId: string, access_requirement_id: string, option: Option) {

    // const queryParams = `?access_title=${access_title}`;

    return this.http.put(`http://localhost:3000/api/tasks/${taskId}/${access_requirement_id}`, option);
  }

}
