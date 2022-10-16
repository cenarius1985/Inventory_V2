import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'success',
      text: 'Espere por favor...',
      timer: 1500

      });
      Swal.showLoading();

    this.userService.login(this.formLogin.value)
      .then(response => { 
       
          this.router.navigate(['/main'])
          Swal.close();
      }
      )
      .catch(error => console.log(error));
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error))
  }

}
