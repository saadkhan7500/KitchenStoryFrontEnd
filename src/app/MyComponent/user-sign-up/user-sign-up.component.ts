import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MyServices/user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  data={
    email:"",
    name:"",
    dob:"",
    gender:"",
    pno:"",
    password:""
  }

ngOnInit(): void {
  
}

constructor(private user:UserService){}

  addUser()
  {
    console.log(this.data)
    this.user.addUser(this.data).subscribe(
      response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      }
    )
  }
}
