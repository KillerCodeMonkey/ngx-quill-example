import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanitize-html',
  templateUrl: './sanitize-html.component.html',
  styleUrls: ['./sanitize-html.component.css']
})
export class SanitizeHtmlComponent implements OnInit {

  dangerousModel = '';
  constructor() { }

  ngOnInit() {
  }

}
