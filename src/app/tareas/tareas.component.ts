import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  taskForm: FormGroup;

  prioridades = ['Alta', 'Media', 'Baja'];
  estados = ['Pendiente', 'En progreso', 'Completada'];
  proyectos = ['Proyecto A', 'Proyecto B', 'Proyecto C'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.taskForm = this.fb.group({
      nombre: [''],
      prioridad: [''],
      tiempoTrabajado: [''],
      fechaLimite: [''],
      estado: [''],
      proyecto: [''],
      descripcion: ['']
    });
  }


  onGuardar() {
    console.log('Datos del formulario:', this.taskForm.value);

    if (this.taskForm.valid) {
      Swal.fire({
        icon: 'success',
        title: '¡Tarea guardada!',
        text: 'La tarea se ha guardado exitosamente.',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/lista-tareas']);
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor, completa todos los campos requeridos.',
        confirmButtonText: 'Corregir'
      });
    }
  }

}
