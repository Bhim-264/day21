import { Component } from '@angular/core';
import { StyledCardComponent } from './styled-card/styled-card.component'; // ✅ Correct path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StyledCardComponent], // ✅ Import your component here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}

