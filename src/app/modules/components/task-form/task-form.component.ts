import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnChanges {
  taskForm: FormGroup;

  @Input() taskToEdit: any | null = null; // Recibir tarea para editar
  @Output() taskSaved = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: [false, Validators.required]
    });
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [false, Validators.required] // Asegurarse de incluir el campo `status`
    });

    // Si hay una tarea para editar, cargar sus valores en el formulario
    if (this.taskToEdit) {
      this.taskForm.patchValue(this.taskToEdit);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskToEdit']) {
      if (this.taskToEdit) {
        this.taskForm.patchValue(this.taskToEdit);
      } else {
        this.resetForm(); // Si no hay tarea en edición, resetea el formulario
      }
    }
  }

  resetForm() {
    // Reiniciar el formulario y restaurar su estado inicial
    this.taskToEdit = null;
    this.taskForm.reset({ title: '', description: '', status: false }); // Reseteo con valores predeterminados
    this.taskForm.markAsPristine();
    this.taskForm.markAsUntouched();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      // Emitir los datos del formulario (agregar o actualizar)
      this.taskSaved.emit({ ...this.taskForm.value, id: this.taskToEdit?.id || null });

      // Reiniciar la tarea en edición y el formulario después de guardar
      this.resetForm();
    }
  }
}
