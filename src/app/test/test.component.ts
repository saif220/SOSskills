import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
selectedFiles: FileList;
currentFileUpload: File;
progress: { percentage: number } = { percentage: 0 };

constructor(private uploadService: UploadFileService) { }

ngOnInit() {
}

selectFile(event) {
  this.selectedFiles = event.target.files;
}

upload() {
  this.progress.percentage = 0;
  console.log(this.selectedFiles.item(0).type);
  this.currentFileUpload = this.selectedFiles.item(0);
  this.uploadService.pushFileToStorage(this.currentFileUpload, 'aa').subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      console.log('File is completely uploaded!');
    }
  });

  this.selectedFiles = undefined;
}
}


