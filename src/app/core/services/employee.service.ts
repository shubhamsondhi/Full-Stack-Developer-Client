import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Employee, EmployeesServiceClient } from './employees-client.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesUpdated$ = new BehaviorSubject(true);
  constructor(private employeeClient: EmployeesServiceClient) {}
  employeeUpdated() {
    this.employeesUpdated$.next(true);
  }
  get isEmployeesUpdated(){
    return this.employeesUpdated$.asObservable();
  }
  getEmployees() {
    return this.employeeClient.employeesGet();
  }
  getEmployee(id: number) {
    return this.employeeClient.employee(id);
  }
  saveEmployee(employee: Employee) {
    return this.employeeClient.employeesPost(employee);
  }
  removeEmployee(employee: Employee) {
    return this.employeeClient.remove(employee.id ?? 0, employee);
  }
  deleteEmployee(id: number) {
    return this.employeeClient.delete(id);
  }
}
