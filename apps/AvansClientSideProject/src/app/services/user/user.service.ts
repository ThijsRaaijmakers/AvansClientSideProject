import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../entity/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USERS: User[] = [
    { id: 1, name: 'Thijs Raaijmakers', emailAddress: 't.raaijmakers2@student.avans.nl', birthday: new Date("2004-06-20"), karma: 69420 },
    { id: 2, name: 'Test User', emailAddress: 'test@gmail.com', birthday: new Date("2002-10-4"), karma: 23 },
    { id: 3, name: 'Stan FatNibba', emailAddress: 'stan@gmail.com', birthday: new Date("2003-05-19"), karma: 9 },
    { id: 4, name: 'Mickel Test', emailAddress: 'mickel@gmail.com', birthday: new Date("1942-03-28"), karma: 6000000 }
  ];

  constructor() { }
  getUsers(): Observable<User[]> {
    const users = of(this.USERS);
    return users;
  }

  addUser(user: User) {
    user.id = this.USERS.length + 1;
    user.birthday = new Date(user.birthday);
    this.USERS.push(user);
  }

  updateUser(updatedUser: User) {
    let updatedUsers = this.USERS.filter(
      (user) => user.id !== updatedUser.id
    );
    updatedUser.birthday = new Date(updatedUser.birthday);
    updatedUsers.push(updatedUser);
    this.USERS = updatedUsers;
  }

  deleteUser(deletedUser: User): void {
    let withoutUser = this.USERS.filter(
      (user) => user.id !== deletedUser.id
    );
    console.log(withoutUser)
    this.USERS = withoutUser;
  }

  getUserById(id: number): User {
    return this.USERS.filter((user) => user.id === id)[0];
  }
}