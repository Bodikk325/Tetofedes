import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selected = "Tetőjavítás"
  
  changeSelected(selected : string)
  {
    this.selected = selected;
  }
}
