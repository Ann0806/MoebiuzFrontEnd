import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // isLoginPage = false;

  // constructor(private router: Router) {
  //   this.router.events.subscribe(() => {
  //     this.isLoginPage = this.router.url === '/login'; 
  //   });
  // }
}
