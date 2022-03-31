import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/models/friends-list.class';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  tblHdStyle: string= "text-primary fst-bold";
  friends: Friend[] =[
    new Friend(1, "Asa", "OH", "Talawanda"),
    new Friend(2, "Cullen", "OH", "Talawanda"),
    new Friend(3, "Chris", "OH", "Talawanda"),
    new Friend(4, "Collin", "OH", "Ohio State University")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
