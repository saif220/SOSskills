import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.scss']
})
export class DownloadFileComponent implements OnInit {
  @Input() fileUpload: string;
  constructor() { }

  ngOnInit() {
  }

}
