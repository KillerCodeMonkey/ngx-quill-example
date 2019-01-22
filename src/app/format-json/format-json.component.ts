import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-json',
  templateUrl: './format-json.component.html',
  styleUrls: ['./format-json.component.css']
})
export class FormatJsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  jsonFormat = "{\"ops\":[{\"insert\":\"hello\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"world\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"}]}";

}
