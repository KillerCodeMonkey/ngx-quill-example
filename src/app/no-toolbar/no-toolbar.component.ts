import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-toolbar',
  templateUrl: './no-toolbar.component.html',
  styleUrls: ['./no-toolbar.component.css']
})
export class NoToolbarComponent implements OnInit {
  isReadOnly = true;
  title = "To far shores tossed."
  constructor() { }

  ngOnInit() {
  }

  logChange($event: any) {
    console.log($event);
  }

  logSelection($event: any) {
    console.log($event);
  }

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly;
  }

}
