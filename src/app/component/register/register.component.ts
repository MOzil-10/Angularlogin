import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister!: FormGroup;

  constructor(private userService: ServiceService) {} // Update the service name to UserService

  ngOnInit(): void {
    this.userRegister = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.userRegister.invalid) {
      return;
    }

    // Call the register method from UserService
    this.userService.register(this.userRegister.value).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        // You can navigate to a success page or do anything else here
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle the error, e.g., show a message to the user
      }
    );
  }
}
