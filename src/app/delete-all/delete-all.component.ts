import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DeleteAllDialogComponent} from "./delete-all-dialog/delete-all-dialog.component";

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(DeleteAllDialogComponent, {
      width: '500px',
      data: ''
    });

  }

  ngOnInit(): void {
  }

}
