import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;
  public submitted: boolean = false;

  constructor(public formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      'firstName': ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z]*$')]],
      'lastName': [''],
      'mobileNumber': [''],
      'emailAdd': [''],
      'annualIncome': [''],
      'organization': [''],
      'otpVerify': [''],
      'legalClause': ['']
    })
  }

  get usrGroup(){return this.userForm.controls;}

  ngOnInit() {

  }

  verifyOtp(){

  }

  getCreditReport(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }else{

    }
  }

}
