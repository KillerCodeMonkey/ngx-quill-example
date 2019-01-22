import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-object',
  templateUrl: './format-object.component.html',
  styleUrls: ['./format-object.component.css']
})
export class FormatObjectComponent implements OnInit {

  objectFormat = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
