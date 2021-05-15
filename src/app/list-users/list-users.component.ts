import {Component, OnInit} from '@angular/core';
import {CrudServiceService} from "../service/crud-service.service";

export class User {
  userDataId: number;
  firstName: string;
  lastName: string;
  birthDate: number;
  phoneNumber: number;

}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private service: CrudServiceService) {
  }

  users: User[];
  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngOnInit(): void {
    this.initGetAllUsers();
    this.getUsersLen();
  }

  initGetAllUsers(): void {
    this.service.getAllUsers(0, this.pageSize).subscribe(data => this.users = data);

  }

  getUsersLen(): void {
    this.service.getAllUsersLen().subscribe(len => this.length = Number.parseInt(len));
  }

  getAllUsers(e): void {
    this.service.getAllUsers(e.pageIndex, e.pageSize).subscribe(data => {
      this.users = data;
      this.pageSize = e.pageSize;
    });
  }

  deleteUser(id): void {
    this.service.deleteSpecUser(id).subscribe(() => {
      this.initGetAllUsers();
      this.getUsersLen();
    });
  }
}
