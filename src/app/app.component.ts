import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user/user';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public users: User[] = [];

  constructor(private userService:UserService){}

  ngOnInit() {
    this.getUsers();
  }
  // public title:"angular-frontend";
  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
