import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-details',
  templateUrl: './access-details.component.html',
  styleUrls: ['./access-details.component.css']
})
export class AccessDetailsComponent implements OnInit {

  access_requirements = [

    {
      figure_number:'06-41-53-14600-00-AZ', 
      requiredPanels: '111A, 111B,111A, 111B,111A, 111B,111A, 111B,111A, 111B,111A, 111B,111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B'
    },

    {
      figure_number: '06-41-53-14800-00-F',
      requiredPanels: '222A, 222B'
    }
  ]
    

  constructor() { }

  ngOnInit(): void {
  }

}
