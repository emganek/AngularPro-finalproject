import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async loginUser(event: FormGroup){
    const { email, password } = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.error = "";
      this.router.navigate(['/']);
    } catch (error: any) {
      this.error = error.message;
    }
    console.log("Login event", event.value);
  }
}
