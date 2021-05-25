import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[];

  constructor() { 

    this.todos = [
      {
        Sno : 1,
        Title: "This is a normal Title",
        desc: "Description for the Title",
        active: true
      },

      {
        Sno : 2,
        Title: "My  Title",
        desc: "Description for the Title",
        active: false
      },

      {
        Sno : 3,
        Title: "3rd Title",
        desc: "Description for the Title",
        active: true
      },

      {
        Sno : 4,
        Title: "Last Title",
        desc: "Description for the Title",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
