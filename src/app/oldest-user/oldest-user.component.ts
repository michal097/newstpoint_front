import {Component, OnInit} from '@angular/core';
import {CrudServiceService} from "../service/crud-service.service";
import {User} from "../list-users/list-users.component";

@Component({
  selector: 'app-oldest-user',
  templateUrl: './oldest-user.component.html',
  styleUrls: ['./oldest-user.component.css']
})
export class OldestUserComponent implements OnInit {

  user: User = new User();

  constructor(private service: CrudServiceService) {
  }

  ngOnInit(): void {
    this.getOldestPerson();
  }

  getOldestPerson(): void {
    this.service.getOldestPerson().subscribe(user => this.user = user);
  }
}
