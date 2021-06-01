import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeResponse } from '../../services/employees-client.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
export class LeftSidebarComponent implements OnInit {
  employeeResponse: EmployeeResponse[];
  constructor(private employeeService: EmployeeService) {
    this.employeeResponse = new Array<EmployeeResponse>();
  }

  ngOnInit(): void {
    this.employeeService.isEmployeesUpdated.subscribe((val) =>

      this.getAllEmployees()
    );
  }

  getAllEmployees() {
    console.log('c');
    this.employeeService
      .getEmployees()
      .subscribe((val) => (this.employeeResponse = val));
  }
}
