import { Component } from '@angular/core'

@Component({
  selector: 'app-format-json',
  templateUrl: './format-json.component.html'
})
export class FormatJsonComponent {
  jsonFormat = '{\"ops\":[{\"insert\":\"hello\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"world\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"}]}'
}
