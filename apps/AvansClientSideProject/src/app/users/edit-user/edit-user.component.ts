import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../entity/user/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: string | null = null;
  user: User | null = null;
  componentExists: boolean = false;
  username: string | null = null;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  onSubmit(): void {
    if (this.componentExists) {
      this.userService.updateUser(this.user!);
      this.router.navigate(["users"]);
  } else {
      this.userService.addUser(this.user!);
      this.router.navigate(["users"]);
  }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.componentExists = true;
        this.user = this.userService.getUserById(Number(this.userId));
        this.username = this.user.name;
      } else {
        this.user = new User();
      }
    });
  }

}