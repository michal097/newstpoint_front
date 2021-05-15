import {Component, OnInit} from '@angular/core';
import {ConnectHeaderService} from "../service/connect-header.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search: FormControl = new FormControl();

  constructor(public searchConnect: ConnectHeaderService, private router: Router) {
  }

  ngOnInit(): void {
  }

  searchPhrase(): void {
    if (this.search.value === undefined || this.search.value === null) {
      this.router.navigate(['/'])
    } else
      this.router.navigate(['search']);
    this.searchConnect.updateMessage(this.search.value);
    this.search = new FormControl();
  }
}
