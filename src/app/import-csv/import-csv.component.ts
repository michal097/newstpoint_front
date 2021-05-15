import {Component, OnInit} from '@angular/core';
import {CrudServiceService} from "../service/crud-service.service";

@Component({
  selector: 'app-import-csv',
  templateUrl: './import-csv.component.html',
  styleUrls: ['./import-csv.component.css']
})
export class ImportCsvComponent implements OnInit {

  file: File = null;
  fileName = '';
  uploadButton: string;
  uploadInfoSucc: string;
  uploadInfoErr: string;

  constructor(private service: CrudServiceService) {
  }

  openInput() {
    let fileInp = document.getElementById('fileInput');
    fileInp !== null ? fileInp.click() : '';
  }

  ngOnInit() {
    this.uploadButton = 'Select File to Upload';
    this.uploadInfoSucc = '';
    this.uploadInfoErr = '';
  }


  onChange(event: any) {
    this.file = event.target.files[0];
    this.fileName = 'Selected file: ' + this.file.name.replace(' ', '');
    this.uploadButton = this.fileName;
  }

  onUpload() {
    this.service.upload(this.file).subscribe(
      () => {
        this.uploadInfoSucc = 'File has been uploaded';
        this.uploadInfoErr = '';
      },
      () => {
        this.uploadInfoErr = 'File cannot be upload';
        this.uploadInfoSucc = '';
      }
    );
  }
}
