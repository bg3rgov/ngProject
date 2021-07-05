import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private breakpointObserver: BreakpointObserver) {}

  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(map((result) => result.matches))
}
