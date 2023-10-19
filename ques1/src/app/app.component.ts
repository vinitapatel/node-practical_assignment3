import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // integerData: number = 42;
  // stringData: string = 'Hello, Angular!';
  // dateData: Date = new Date();

  items: string[] = ['Apple', 'Mango', 'Banana', 'Pineapple'];
}
