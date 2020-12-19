import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.sass']
})
export class AddEditEventComponent implements OnInit {

  imageUploaded: boolean = false;
  preview: any = "https://i.ibb.co/HgtzL74/upload-cloud-flat.png";

  constructor() { }

  ngOnInit() {
  }

}
