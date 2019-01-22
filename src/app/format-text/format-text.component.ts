import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-text',
  templateUrl: './format-text.component.html',
  styleUrls: ['./format-text.component.css']
})
export class FormatTextComponent implements OnInit {
  textFormat = 'Hello World!';
  constructor() { }

  ngOnInit() {
  }

}
