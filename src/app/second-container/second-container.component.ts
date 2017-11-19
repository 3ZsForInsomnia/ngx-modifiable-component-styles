import { Component, OnInit } from '@angular/core';
import { Second } from './../values/second.value';

@Component({
  selector: 'second-container',
  templateUrl: './second-container.component.html',
  styleUrls: ['./second-container.component.css'],
  providers: [
    { provide: "Values", useValue: Second }
  ]
})
export class SecondContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}