import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate-rtl',
  templateUrl: './activate-rtl.component.html',
  styleUrls: ['./activate-rtl.component.css']
})
export class ActivateRtlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activateRTL(editor) {
    editor.format('align', 'right')
    editor.format('direction', 'rtl')
  }

}
