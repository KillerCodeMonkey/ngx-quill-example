import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-sanitize-html',
  templateUrl: './no-sanitize-html.component.html',
  styleUrls: ['./no-sanitize-html.component.css']
})
export class NoSanitizeHtmlComponent implements OnInit {

  dangerousHtml=`<p><img src="http://google.com/" onerror="alert('Sanatizing not working :(')">Incorrect image src should not open alert</p>`;
  dangerousModel2 = '';

  constructor() { }

  ngOnInit() {
  }

}
