import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-access-details',
  templateUrl: './access-details.component.html',
  styleUrls: ['./access-details.component.css']
})
export class AccessDetailsComponent implements OnInit {

  access_requirements = [

    {
      access_description: 'Cabin floor panels FR12-24',
      figure_number:'06-41-53-14600-00-AZ', 
      requiredPanels: '111A, 111B,111A, 111B,111A, 111B,111A, 111B,111A, 111B,111A, 111B,111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B, 111A, 111B'
    },

    {
      access_description: 'Cabin floor panels FR12-24',
      figure_number: '06-41-53-14800-00-F',
      requiredPanels: '222A, 222B'
    }
  ]
    

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

      console.log(params['task_number'])
    })
  }

}
