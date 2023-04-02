import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from 'src/app/app.module';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error!: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.createUser(email, password);
      this.error = "";
      this.router.navigate(['/']);
    } catch (error: any) {
      this.error = error.message;
    }
    console.log("Register event", event.value);
  }
}
