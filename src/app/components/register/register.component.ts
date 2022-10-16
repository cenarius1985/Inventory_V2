import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  recordarme = false;
  email2:string= '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      nombre: new FormControl(),
      password: new FormControl(),
      password2: new FormControl(),
    })
  }
  
  ngOnInit(): void {
    this.email2 = localStorage.getItem('email') || '';
    if ( this.email2.length > 1 ) {
      this.formReg.setValue({email: this.email2});
    }

  }

  onSubmit() {
    if ( this.recordarme ) {
      localStorage.setItem('email', this.formReg.value.email);
    }

    this.userService.register(this.formReg.value)
    .then(response => { 
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/login']) })
    .catch((error) => {
      this.router.navigate(['/login'])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'tu ya estas registrado',
        showConfirmButton: false,
        timer: 1500
      })

    })
  }
  recordar(){

      localStorage.setItem('email', this.formReg.value.email);
      
  }
}
