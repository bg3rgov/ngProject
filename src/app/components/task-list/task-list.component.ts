import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  tasks = [

    {
      task_number: '200171-01-1',
      task_title: 'AFT CABIN UNDERFLOOR COMPARTMENT',
      task_description: 'Cleaning Of Ewis Installed In The Aft Cabin Underfloor Compartment (Only If Contaminated)(ewis)',
      access_requirements: [
        {
          description: 'AFT Cabin Floor Panels',
          options: [
            {
              figure_number:'06-41-53-000-000-A', 
              requiredPanels: '111A, 111B'
            },

            {
              figure_number: '06-41-53-000-000-B',
              requiredPanels: '222A, 222B'
            }
          ]
        },
        {
          description: 'AFT Cargo Compartment Ceiling Panels',
          options: [
            {
              figure_number:'06-41-53-111-111-A', 
              requiredPanels: '101A, 101B'
            },

            {
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
          description: 'Avionics Bay floor palens',
          options: [
            {
              figure_number:'06-41-53-AVI-AVI-A', 
              requiredPanels: 'AVI1, AVI2'
            },

            {
              figure_number: '06-41-53-AVI-AVI-A-AVI-B',
              requiredPanels: '2AVI1, 2AVI2'
            }
          ]
        },
      ]
    },
    {
      task_number: '200171-01-1',
      task_title: 'AFT CABIN UNDERFLOOR COMPARTMENT',
      task_description: 'Cleaning Of Ewis Installed In The Aft Cabin Underfloor Compartment (Only If Contaminated)(ewis)',
      access_requirements: [
        {
          description: 'AFT Cabin Floor Panels',
          options: [
            {
              figure_number:'06-41-53-000-000-A', 
              requiredPanels: '111A, 111B'
            },

            {
              figure_number: '06-41-53-000-000-B',
              requiredPanels: '222A, 222B'
            }
          ]
        },
        {
          description: 'AFT Cargo Compartment Ceiling Panels',
          options: [
            {
              figure_number:'06-41-53-111-111-A', 
              requiredPanels: '101A, 101B'
            },

            {
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
          description: 'Avionics Bay floor palens',
          options: [
            {
              figure_number:'06-41-53-AVI-AVI-A', 
              requiredPanels: 'AVI1, AVI2'
            },

            {
              figure_number: '06-41-53-AVI-AVI-A-AVI-B',
              requiredPanels: '2AVI1, 2AVI2'
            }
          ]
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {

    console.log(this.tasks)
  }

}
