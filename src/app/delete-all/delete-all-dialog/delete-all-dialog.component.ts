import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CrudServiceService} from "../../service/crud-service.service";
import {DeleteAllComponent} from "../delete-all.component";

@Component({
  selector: 'app-delete-all-dialog',
  templateUrl: './delete-all-dialog.component.html',
  styleUrls: ['./delete-all-dialog.component.css']
})
export class DeleteAllDialogComponent implements OnInit {
  userDeletedInfo: string;

  constructor(public dialogRef: MatDialogRef<DeleteAllComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private service: CrudServiceService,
  ) {
  }


  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteAllUsers(): void {
    this.service.deleteAllUsers().subscribe(() => {
      this.userDeletedInfo = 'All users has been deleted!'
    });
  }
}
