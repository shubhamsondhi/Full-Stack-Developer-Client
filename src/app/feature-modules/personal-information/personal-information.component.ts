import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/core/services/employees-client.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  employeeId: number = -1;
  employee: Employee;
  employeeForm: FormGroup;
  get rolesDD() {
    return [
      'Accounting',
      'Business Development',
      'Engineering',
      'Human Resources',
      'Legal',
      'Marketing',
      'Product Management',
      'Research and Development',
      'Sales',
      'Services',
      'Support',
      'Training',
    ];
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {
    this.employee = new Employee();
    this.employeeForm = this.initForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params);
      if (params['id'] === 'add') {
        this.employeeForm = this.initForm();
        return;
      }
      this.employeeId = params['id'];
      this.getEmployee();
    });
  }

  getEmployee() {
    this.employeeService.getEmployee(this.employeeId).subscribe((employee) => {
      this.employee = employee;
      this.employeeForm.patchValue(this.employee);
      this.employeeService.employeeUpdated();
    });
  }

  save() {
    if(this.employeeForm.invalid){
      alert(`Please fill all the required fields.`);

      return;
    }
    const employee = new Employee();
    employee.init(this.employeeForm.value);
    this.employeeService.saveEmployee(employee).subscribe((val) => {
      this.employeeService.employeeUpdated();
      if (employee.id === 0) {
        alert(`Employee name ${employee.fullName} has been added.`);
      } else {
        alert(`Employee name ${employee.fullName} has been updated.`);
      }
    });
  }
  private initForm() {
    return this.formBuilder.group({
      id: 0,
      created: '',
      modified: '',
      firstName: '',
      lastName: '',
      fullName: ['',Validators.required],
      email: '',
      gender: '',
      phoneNumber: ['',Validators.required],
      role: ['',Validators.required],
      address: '',
      isActive: true,
    });
  }
}
