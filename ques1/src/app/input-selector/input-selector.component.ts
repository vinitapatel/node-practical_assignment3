import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.css'],
  providers: [FormsModule],
})
export class InputSelectorComponent {
  selectedInputType: string = 'textbox'; // Default selection
  textboxValue: string = '';
  textareaValue: string = '';
}
