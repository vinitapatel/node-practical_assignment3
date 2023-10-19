import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userData = {
    name: '',
    email: '',
    address: '',
  };

  onSubmit() {
    // You can implement the submission logic here
    console.log('User data submitted:', this.userData);
  }
}
