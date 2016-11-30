import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  @Input() friend;
  @Output() addingFriend = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addFriend(){
    if( this.friend ){
      this.friend = false;
    }
    else{
      this.friend = true;
    };
    this.addingFriend.emit( this.friend );
  }

}
