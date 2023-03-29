import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private message: NzMessageService) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
      // Add any other necessary form controls here
    });
  }

  form: FormGroup;
  formData : any[] = [];
  dataSet : any;
  ngOnInit(): void {
  }

  onSubmit() {
    this.formData = []
    if (this.form.valid) {
      const data = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email
      
      };
      this.formData.push(data);
      localStorage.setItem('formData', JSON.stringify(this.formData));
     
      let formData = localStorage.getItem('formData');
         if (formData !== null) {
         formData = JSON.parse(formData);
          this.dataSet = formData
         }

      // console.log(this.formData)
      // this.dataSet.push(this.formData[0])
      // console.log(this.dataSet)
       console.log(this.dataSet)
       this.message.success('Login Sucessfull');

      this.form.reset();
    }

  }
}
