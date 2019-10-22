import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-task',
  templateUrl: './about-task.component.html',
  styleUrls: ['./about-task.component.scss']
})
export class AboutTaskComponent implements OnInit {

  interactWithContract = 'assets/images/Interacting with eth contact.png';

  constructor() { }

  ngOnInit() {
  }

}
