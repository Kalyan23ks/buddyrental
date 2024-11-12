import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  reqpwd:any;
  constructor(private router:Router){}

  checklogin()
  {
    this.reqpwd=this.username.slice(0,3)+'123';
    if(this.password==this.reqpwd)
    {
      alert("User login sucessfully")
      this.router.navigateByUrl('/user');
    }
    else if(this.username=='admin' && this.password=='admin123')
    {
      alert("Admin loggin sucessfully");
      this.router.navigateByUrl('/admin/car');
    }
    else
    {
      alert("Invalid username or password");
    }
   
}
}



