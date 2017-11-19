import { Component, Inject } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: [ 
    './my-button.component.css',
    './first-override.styles.css',
    './second-override.styles.css' 
  ]
})
export class MyButtonComponent  {
  values;
  constructor(@Inject("Values") values) {
    this.values = values;
  }
}
