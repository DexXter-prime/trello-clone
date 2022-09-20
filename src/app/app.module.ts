import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardListComponent } from './board-page/board-list/board-list.component';
import { BoardPageComponent } from './board-page/board-page.component';
import { BoardItemComponent } from './board-page/board-list/board-item/board-item.component';
import { BoardNavbarComponent } from './general-components/board-navbar/board-navbar.component';
import { CurrentBoardPageComponent } from './current-board-page/current-board-page.component';
import { TaskItemComponent } from './current-board-page/task-item/task-item.component';
import { BoardColumnComponent } from './current-board-page/board-column/board-column.component';
import { DynamicFormComponent } from './current-board-page/board-column/dynamic-form/dynamic-form.component';
import { FormHostDirective } from './directives/form-host.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { ErrorMessageComponent } from './current-board-page/board-column/dynamic-form/dynamic-error-message/error-message.component';
import { WindowOverlayComponent } from './current-board-page/task-item/window-overlay/window-overlay.component';
import { TextareaAutoresizeDirective } from './directives/textarea-autoresize.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardPageComponent,
    BoardItemComponent,
    BoardNavbarComponent,
    CurrentBoardPageComponent,
    TaskItemComponent,
    BoardColumnComponent,
    DynamicFormComponent,
    ErrorMessageComponent,
    FormHostDirective,
    AutoFocusDirective,
    WindowOverlayComponent,
    TextareaAutoresizeDirective,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
