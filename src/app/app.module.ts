import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { NewOptionComponent } from './components/new-option/new-option.component';


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
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input'; 
import {MatDividerModule} from '@angular/material/divider';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { NewTaskComponent } from './components/new-task/new-task.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    NewOptionComponent,
    TaskListComponent,
    AccessDetailsComponent,
    ToolbarComponent,
    InfoCardComponent,
    NewTaskComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewOptionComponent]
})
export class AppModule { }
