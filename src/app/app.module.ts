import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {LayoutModule} from '@angular/cdk/layout';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AccessDetailsComponent } from './components/access-details/access-details.component';
import { AccessTabsComponent } from './access-tabs/access-tabs.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input'; 
import {MatDividerModule} from '@angular/material/divider'; 

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    TaskListComponent,
    AccessDetailsComponent,
    AccessTabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
