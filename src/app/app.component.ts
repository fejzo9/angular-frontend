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
  // public niz = [1,2,3,4,5,6,7,8];
     public editUser: User={ 
      id:0,
      name:"",
      address:"",
      urlPicture:""};
     public deleteUser: User={ 
      id:0,
      name:"",
      address:"",
      urlPicture:""};

  constructor(private userService:UserService){}

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }
  
  // public title:"angular-frontend";
  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(user: User | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      if(user!=null)
      {this.editUser=user;
        console.log(this.users);}
      
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddUser(addForm: NgForm): void {
    // document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateUser(userId: number,user: User): void {
    this.userService.updateUser(userId,user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
