import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {

  users: User[] = [
    {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', friend: false},
    {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', friend: true},
    {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', friend: false}
  ];

  getUsers(): User[]{
    return this.users;
  };

  addUser( user ){
    this.users.push( user );
  };

  removeUser( i ){
    this.users.splice( i, 1);
  };

  addFriend( i, friend ){
    this.users[ i ].friend = friend;
  };

}
