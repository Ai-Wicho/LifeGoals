// importar los componentes necesarios

import { Component } from '@angular/core';

// exportar la clase
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifegoals';
}
