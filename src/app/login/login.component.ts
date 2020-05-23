import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    public authService: AuthService,
    private router: Router
   ) {}
  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          this.router.navigate(['/home']);
          alert(result.message);
        }
        else{
            console.log(result);
            alert(result.message);
        }
      });
    }
  }
}
