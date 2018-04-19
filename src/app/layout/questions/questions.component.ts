import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [routerTransition()]
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
