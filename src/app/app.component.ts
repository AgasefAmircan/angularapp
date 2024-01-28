import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'manager';
  name = 'Task Manager';
  isDisplay = false;
  items = [
    {
      description: 'Task 2',
      checked: false,
      action: 'Delete',
      completed: true,
    },
    {
      description: 'Task 3',
      checked: false,
      action: 'Delete',
      completed: false,
    },
    {
      description: 'Task 4',
      checked: false,
      action: 'Delete',
      completed: false,
    },
  ];
  addItem(value: string) {
    if (!value.trim()) {
      alert('Enter Task please');
    } else {
      this.items.unshift({
        description: value,
        checked: false,
        action: 'Delete',
        completed: false,
      });
      value = '';
    }
  }
}