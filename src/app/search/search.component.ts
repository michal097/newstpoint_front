import {Component, OnInit} from '@angular/core';
import {ConnectHeaderService} from "../service/connect-header.service";
import {CrudServiceService} from "../service/crud-service.service";
import {User} from "../list-users/list-users.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchUsers: User[] = [];

  constructor(private search: ConnectHeaderService, private service: CrudServiceService, private router: Router) {
  }

  ngOnInit(): void {

    this.search.currentData.subscribe(phrase => {
      if (phrase === '' || phrase === undefined) {
        this.router.navigate(['/'])
      }
      this.service.makeSearch(phrase).subscribe(userData => this.searchUsers = userData);
    })
  }

}
