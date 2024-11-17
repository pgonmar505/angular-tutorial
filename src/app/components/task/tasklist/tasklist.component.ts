import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
  taskList: Task[] = []

  ngOnInit(): void {
    
    this.taskList = [
    new Task (1,"Tarea 1", "Descripción Tarea 1",TaskPriority.LOW,TaskStatus.PENDING,new Date("11/1/2024"),new Date("11/18/2024"),false),
    new Task (2,"Tarea 2", "Descripción Tarea 2",TaskPriority.HIGH,TaskStatus.IN_PROGRESS,new Date("11/5/2024"),new Date("11/16/2024"),false),
    new Task (3,"Tarea 3", "Descripción Tarea 3",TaskPriority.LOW,TaskStatus.IN_PROGRESS,new Date("11/21/2024"),new Date("11/30/2024"),false),
    new Task (4,"Tarea 4", "Descripción Tarea 4",TaskPriority.HIGH,TaskStatus.COMPLETED,new Date("11/8/2024"),new Date("11/21/2024"),false),
    new Task (5,"Tarea 5", "Descripción Tarea 5",TaskPriority.MEDIUM,TaskStatus.PENDING,new Date("11/10/2024"),new Date("11/30/2024"),false),
    new Task (6,"Tarea 6", "Descripción Tarea 6",TaskPriority.LOW,TaskStatus.PENDING,new Date("11/15/2024"),new Date("11/25/2024"),true),
    new Task (7,"Tarea 7", "Descripción Tarea 7",TaskPriority.HIGH,TaskStatus.IN_PROGRESS,new Date("11/20/2024"),new Date("11/30/2024"),false),
    new Task (8,"Tarea 8", "Descripción Tarea 8",TaskPriority.MEDIUM,TaskStatus.COMPLETED,new Date("11/25/2024"),new Date("11/30/2024"),true),
    new Task (9,"Tarea 9", "Descripción Tarea 9",TaskPriority.LOW,TaskStatus.PENDING,new Date("11/1/2024"),new Date("11/30/2024"),false),
    new Task (10,"Tarea 10", "Descripción Tarea 10",TaskPriority.HIGH,TaskStatus.COMPLETED,new Date("11/1/2024"),new Date("11/30/2024"),false),
    ];
  }
   
}
  
