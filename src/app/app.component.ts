import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photo-fetching-app';
}
