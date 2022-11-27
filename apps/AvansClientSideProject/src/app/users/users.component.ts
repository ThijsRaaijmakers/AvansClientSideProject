import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user/user'
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  selectedUser?: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users)
  }
  onDelete(user: User):void {
    this.userService.deleteUser(user);
    this.getUsers()
  }


}
