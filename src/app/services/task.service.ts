import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [

    {
      task_number: '200171-01-1',
      task_title: 'AFT CABIN UNDERFLOOR COMPARTMENT',
      task_description: 'Cleaning Of Ewis Installed In The Aft Cabin Underfloor Compartment (Only If Contaminated)(ewis)',
      access_requirements: [
        {
          access_title: 'AFT Cabin Floor Panels',
          options: [
            {
              access_description: 'Cabin floor panels frame 66 to 68',
              figure_number:'06-41-53-000-000-A', 
              requiredPanels: '111A, 111B'
            },

            {
              access_description: 'Cabin floor panels frame 66 to 68',
              figure_number: '06-41-53-000-000-B',
              requiredPanels: '222A, 222B'
            }
          ]
        },
        {
          access_title: 'AFT Cargo Compartment Ceiling Panels',
          options: [
            {
              access_description: 'Cargo ceiling panels frame 36 to 54',
              figure_number:'06-41-53-111-111-A', 
              requiredPanels: '101A, 101B'
            },

            {
              access_description: 'Cargo ceiling panels frame 36 to 54',
              figure_number: '06-41-53-111-111-B',
              requiredPanels: '202A, 202B'
            }
          ]
        }
      ]
    },
    {
      task_number: '531191-01-1',
      task_title: 'AFT FACE OF FWD PRESSURE BULKHEAD',
      task_description: 'DETAILED INSPECTION OF AFT FACE OF FORWARD PRESSURE BULKHEAD, BELOW COCKPIT FLOOR LEVEL, INCLUDING FR 1 AND STRINGER CONNECTIONS NOTE: IF CORROSION IS FOUND ON THE PRESSURE BULKHEAD ABOVE THE AVIONICS FLOOR PANELS THE COMPLETE AFT FACE (UPPER AND LOWER AREAS) OF THE PRESSURE BULKHEAD IS TO BE INSPECTED',
      access_requirements: [
        {
          access_title: 'Avionics Bay floor palens',
          options: [
            {
              access_description: 'Avionics compartment floor panels',
              figure_number:'06-41-53-AVI-AVI-A', 
              requiredPanels: 'AVI1, AVI2'
            },

            {
              access_description: 'Avionics compartment floor panels',
              figure_number: '06-41-53-AVI-AVI-A-AVI-B',
              requiredPanels: '2AVI1, 2AVI2'
            }
          ]
        },
      ]
    },
    {
      task_number: '200171-01-2',
      task_title: 'AFT CABIN UNDERFLOOR COMPARTMENT',
      task_description: 'Cleaning Of Ewis Installed In The Aft Cabin Underfloor Compartment (Only If Contaminated)(ewis)',
      access_requirements: [
        {
          access_title: 'AFT Cabin Floor Panels',
          options: [
            {
              access_description: 'Cabin floor panels frame 46 to 68',
              figure_number:'06-41-53-000-000-A', 
              requiredPanels: '111A, 111B'
            },

            {
              access_description: 'Cabin floor panels frame 46 to 68',
              figure_number: '06-41-53-000-000-B',
              requiredPanels: '222A, 222B'
            }
          ]
        },
        {
          access_title: 'AFT Cargo Compartment Ceiling Panels',
          options: [
            {
              access_description: 'Cargo ceiling panels frame 36 to 54',
              figure_number:'06-41-53-111-111-A', 
              requiredPanels: '101A, 101B'
            },

            {
              access_description: 'Cargo ceiling panels frame 36 to 54',
              figure_number: '06-41-53-111-111-B',
              requiredPanels: '202A, 202B'
            }
          ]
        }
      ]
    },
    {
      task_number: '531191-01-1',
      task_title: 'AFT FACE OF FWD PRESSURE BULKHEAD',
      task_description: 'DETAILED INSPECTION OF AFT FACE OF FORWARD PRESSURE BULKHEAD, BELOW COCKPIT FLOOR LEVEL, INCLUDING FR 1 AND STRINGER CONNECTIONS NOTE: IF CORROSION IS FOUND ON THE PRESSURE BULKHEAD ABOVE THE AVIONICS FLOOR PANELS THE COMPLETE AFT FACE (UPPER AND LOWER AREAS) OF THE PRESSURE BULKHEAD IS TO BE INSPECTED',
      access_requirements: [
        {
          access_title: 'Avionics Bay floor palens',
          options: [
            {
              access_description: 'Avionics compartment floor panels',
              figure_number:'06-41-53-AVI-AVI-A', 
              requiredPanels: 'AVI1, AVI2'
            },

            {
              access_description: 'Avionics compartment floor panels',
              figure_number: '06-41-53-AVI-AVI-A-AVI-B',
              requiredPanels: '2AVI1, 2AVI2'
            }
          ]
        },
      ]
    }
  ]


  constructor() { }

  getTasks(searchtask) {

    if(!searchtask) return this.tasks;
    return this.tasks.filter(t => t.task_number.includes(searchtask));
  }

  createTask(task_number: string, task_title: string, task_description: string, access_requirements: []) {

    let newTask = {

      task_number: task_number,
      task_title: task_title,
      task_description: task_description,
      access_requirements: access_requirements
    };
    
    this.tasks.push(newTask);
    console.log(this.tasks);
  }
}
