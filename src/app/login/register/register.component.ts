import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean | undefined;
  constructor() {
    this.registerForm =new FormGroup({
      title:new FormControl ('', Validators.required),
      firstName:new FormControl ('', Validators.required),
      lastName:new FormControl ('', Validators.required),
      email: new FormControl('', (Validators.required, Validators.email)),
      password:new FormControl ('', (Validators.required, Validators.minLength(6))),
      confirmPassword:new FormControl ('', Validators.required),
      acceptTerms:new FormControl (false, Validators.requiredTrue)
  })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.registerForm.valid){
      alert(JSON.stringify(this.registerForm.value));
      
      
      
    }else{
      console.log("form not valid");
      
    }

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}

