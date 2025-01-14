import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http'; 
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute} from '@angular/router';
import { TaskFormComponent } from '../../components/task-form/task-form.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSlideToggleModule,
    HttpClientModule,
    TaskFormComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  tasks: any[] = [];
  taskToEdit: any | null = null;
  email: string = '';
  showAllTasks = false

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
    } else {
      this.route.queryParams.subscribe((params) => {
        this.email = params['email'] || null;
      });
      this.loadTasks();
    }
  }

  loadTasks() {
    if (this.showAllTasks) {
      this.taskService.getTasks().subscribe((data) => (this.tasks = data));
    } else {
      this.taskService
        .getTasksByEmail(this.email)
        .subscribe((data) => (this.tasks = data));
    }
  }

  toggleTaskView(event: any) {
    this.showAllTasks = event.checked;
    this.loadTasks();
  }

  createOrUpdateTask(task: any) {
    if (task.id) {
      const updatedTask = {
        ...this.taskToEdit,
        ...task,
      };
      this.taskService.updateTask(task.id, updatedTask).subscribe(() => {
        // alert('Tarea actualizada');
        this.taskToEdit = null;
        this.loadTasks();
      });
    } else {
      task.email = this.email;
      task.status = false;
      this.taskService.addTask(task).subscribe(() => {
        // alert('Tarea creada');
        this.taskToEdit = null;
        this.loadTasks();
      });
    }
  }
  
  updateTask(task: any) {
    this.taskService.updateTask(task.id, task).subscribe(() => {
      alert('Tarea actualizada');
    });
  }

  editTask(task: any) {
    this.taskToEdit = task;
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => {
      alert('Tarea eliminada');
      this.loadTasks();
    });
  }

  cancelEdit() {
    this.taskToEdit = null;
  }

  logout() {
    localStorage.removeItem('authToken');
    // location.reload();
    this.router.navigate(['/login']);
  }
}