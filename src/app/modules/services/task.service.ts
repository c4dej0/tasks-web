import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Task } from '../models/task.model'; // Asegúrate de ajustar la ruta al archivo correcto

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  getTasksByEmail(email: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks/${email}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  updateTask(taskId: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${taskId}`, task);
  }

  deleteTask(taskId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
