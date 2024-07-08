import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tetofedes';

  selected = "Tetőjavítás"
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  changeSelected(selected : string)
  {
    this.selected = selected;
  }
}
