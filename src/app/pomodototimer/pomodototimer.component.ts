import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pomodototimer',
  standalone: true,
  imports: [],
  templateUrl: './pomodototimer.component.html',
  styleUrl: './pomodototimer.component.css'
})
export class PomodototimerComponent implements OnInit, OnDestroy {
  // Tiempo del cronómetro en segundos
  public tiempoPomodoro: number = 30 * 60;  // 30 minutos en segundos
  public tiempoDescanso: number = 5 * 60;   // 5 minutos en segundos
  public tiempoRestante: number = this.tiempoPomodoro;  // Tiempo actual en el cronómetro
  private interval: any;
  public enMarcha: boolean = false;
  public tiempoFormateado: string = '30:00';  // Para mostrar el tiempo restante

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    // Limpia el intervalo cuando el componente se destruye
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // Función para iniciar el cronómetro
  iniciar(): void {
    if (!this.enMarcha) {
      this.enMarcha = true;
      this.interval = setInterval(() => {
        if (this.tiempoRestante > 0) {
          this.tiempoRestante--;
          this.formatearTiempo();
        } else {
          clearInterval(this.interval); // Detener el cronómetro cuando llegue a 0
        }
      }, 1000); // Disminuye el tiempo cada segundo
    }
  }

  // Función para pausar el cronómetro
  pausar(): void {
    this.enMarcha = false;
    clearInterval(this.interval);
  }

  // Función para reiniciar el cronómetro
  reiniciar(): void {
    this.enMarcha = false;
    clearInterval(this.interval);
    this.tiempoRestante = this.tiempoPomodoro;  // Reinicia a 30 minutos (Pomodoro)
    this.formatearTiempo();  // Actualiza la visualización
  }

  // Función para cambiar entre Pomodoro y Descanso
  cambiarModo(tipo: string): void {
    this.enMarcha = false;
    clearInterval(this.interval);
    if (tipo === 'pomodoro') {
      this.tiempoRestante = this.tiempoPomodoro;
    } else if (tipo === 'descanso') {
      this.tiempoRestante = this.tiempoDescanso;
    }
    this.formatearTiempo();  // Actualiza la visualización
  }

  // Función para formatear el tiempo a MM:SS
  formatearTiempo(): void {
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    this.tiempoFormateado = `${this.pad(minutos)}:${this.pad(segundos)}`;
  }

  // Función para agregar ceros a la izquierda si es necesario
  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
