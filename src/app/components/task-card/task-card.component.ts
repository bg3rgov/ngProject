import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class TaskCardComponent implements OnInit {

  @ViewChild('expandableContent') expandableContent: ElementRef;
  @Input() task;
  constructor() { }

  ngOnInit(): void {

  }

  state = 'collapsed';
  toggle(): void {

    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
    this.expandableContent.nativeElement.classList.toggle('hidden-content');
    this.expandableContent.nativeElement.classList.toggle('expandableContent');    
    console.log(this.state);
    
  }


}
