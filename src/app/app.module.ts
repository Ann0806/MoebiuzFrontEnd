import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PomodototimerComponent } from './pomodototimer/pomodototimer.component';
import { TareasComponent } from './tareas/tareas.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { AppRoutingModule } from './app.routes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    LoginComponent,
    PomodototimerComponent,
    TareasComponent,
    ListaTareasComponent, 
    AppRoutingModule,
    ToolbarComponent,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
//   bootstrap: [AppComponent],
})
export class AppModule { }