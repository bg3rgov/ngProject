import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-tabs',
  templateUrl: './access-tabs.component.html',
  styleUrls: ['./access-tabs.component.css']
})
export class AccessTabsComponent implements OnInit {

   @Input() access: {};
  constructor() { }

  ngOnInit(): void {
  }

}
