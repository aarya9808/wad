import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // For ngModel
import { CommonModule } from '@angular/common';  // For NgFor

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [FormsModule, CommonModule],  
  template: `
    <div style="text-align: center;">
      <h2>📝 To-Do List</h2>

      <input [(ngModel)]="newTask" placeholder="Enter a task" />
      <button (click)="addTask()">Add</button>

      <ul>
        <li *ngFor="let task of tasks; let i = index">   
          <span>{{ task }}</span>
          <button (click)="editTask(i)">Edit</button>
          <button (click)="deleteTask(i)">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = [];  // Array to store tasks
  newTask: string = '';  // For binding input value
  editIndex: number | null = null;  // To track the task being edited

  // Add or edit a task
  addTask() {
    if (this.newTask.trim()) {
      if (this.editIndex === null) {
        this.tasks.push(this.newTask);  // Add new task
      } else {
        this.tasks[this.editIndex] = this.newTask;  // Edit existing task
        this.editIndex = null;  // Reset edit mode
      }
      this.newTask = '';  // Clear input field after adding
    }
  }

  // Edit a task
  editTask(index: number) {
    this.newTask = this.tasks[index];  // Set input to task value
    this.editIndex = index;  // Mark task as being edited
  }

  // Delete a task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);  // Remove task
    this.editIndex = null;  // Reset editing mode
    this.newTask = '';  // Clear input field
  }
}
