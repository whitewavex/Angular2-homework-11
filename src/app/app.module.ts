import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { StarComponent } from './star/star.component';
import { UsersComponent } from './users/users.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    StarComponent,
    UsersComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
