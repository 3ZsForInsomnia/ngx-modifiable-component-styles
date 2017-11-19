import { Component, OnInit } from '@angular/core';
import { First } from './../values/first.value';

@Component({
  selector: 'first-container',
  templateUrl: './first-container.component.html',
  styleUrls: ['./first-container.component.css'],
  providers: [
    { provide: "Values", useValue: First }
  ]
})
export class FirstContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}