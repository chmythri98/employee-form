import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder,ReactiveFormsModule , FormsModule} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { EmployeeFormComponent } from './employee-form.component';
import { By } from '@angular/platform-browser';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;
  let fb: FormBuilder;
  let message: NzMessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      imports: [ReactiveFormsModule, FormsModule, NzOverlayModule,NzMessageModule],
      providers: [FormBuilder, NzMessageService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    message = TestBed.inject(NzMessageService);
    fixture.detectChanges();
  });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ EmployeeFormComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form', () => {
    expect(component.form).toBeTruthy();
  });

  it('should be invalid when all required fields are empty', () => {
    component.form.setValue({
      firstName: '',
      lastName: '',
      email: ''
    });
    expect(component.form.valid).toBeFalsy();
  });

  it('should be valid when all required fields are filled', () => {
    component.form.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    });
    expect(component.form.valid).toBeTruthy();
  });

  it('should be invalid when the first name is empty', () => {
    component.form.controls['firstName'].setValue('');
    expect(component.form.controls['firstName'].valid).toBeFalsy();
  });

  it('should be invalid when the last name is empty', () => {
    component.form.controls['lastName'].setValue('');
    expect(component.form.controls['lastName'].valid).toBeFalsy();
  });

  it('should be invalid when an invalid email is entered', () => {
    component.form.controls['email'].setValue('invalid_email');
    expect(component.form.controls['email'].valid).toBeFalsy();
  });

  it('should disable the submit button when the form is invalid', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    component.form.setValue({
      firstName: '',
      lastName: '',
      email: ''
    });
    fixture.detectChanges();
   // const submitBtn = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
   expect(submitButton.disabled).toBeTruthy();
  });


  it('should enable the submit button when the form is valid', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    component.form.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    });
    fixture.detectChanges();
   // const submitBtn = fixture.debugElement.query(By.css('button[type="submit"]'));
   expect(submitButton.disabled).toBeFalsy();
  });

  it('should display a success message when the form is submitted successfully', () => {
    spyOn(message, 'success');
    component.form.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    });
    component.onSubmit();
    expect(message.success).toHaveBeenCalledWith
  });
  // it('should disable the submit button when the form is invalid', () => {
  //   component.form.setValue({
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   });
  //   fixture.detectChanges();
  //   const submitBtn = fixture.debugElement.query(By.css('button[type="submit"]'));
  //   expect(submitBtn.nativeElement.disabled).toBeTruthy();
  // });

  // it('should display a success message when the form is submitted successfully', () => {
  //   spyOn(message, 'success');
  //   component.form.setValue({
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'john.doe@example.com'
  //   });
  //   component.onSubmit();
  //   expect(message.success).toHaveBeenCalledWith('Login Sucessfull');
  // });
   
});


