import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users = this.ts.getUsers();
  newUser = {
    name: '',
    username: '',
    email: ''
  }

  constructor(
    private ts:UsersService
    ) { }

  ngOnInit() {
  }

  addUser(){
    let lastId = this.users[ this.users.length - 1 ].id;
    let user = {
      id: ++lastId,
      name: this.newUser.name,
      username: this.newUser.username,
      email: this.newUser.email,
      friend: false
    };
    this.ts.addUser( user );
    this.newUser.name = '';
    this.newUser.username = '';
    this.newUser.email = '';
  };

  removeUser( i ){
    this.ts.removeUser( i );
  };

  addFriend( i, friend ){
    this.ts.addFriend( i, friend );
  }

}
