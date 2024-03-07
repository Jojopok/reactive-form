import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InscriptionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-form';
}
