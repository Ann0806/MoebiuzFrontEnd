import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PomodototimerComponent } from './pomodototimer/pomodototimer.component';
import { TareasComponent } from './tareas/tareas.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { PantallacargaComponent } from './pantallacarga/pantallacarga.component';

export const routes: Routes = [
    {path: '', component: PantallacargaComponent},
    { path: 'login', component: LoginComponent },
    { path: 'pomodototimer', component: PomodototimerComponent },
    { path: 'tareas', component: TareasComponent },
    { path: 'lista-tareas', component: ListaTareasComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

