import { Employee } from '../entities/Employee';

export interface EmployeeRepository {
  getAll(): Promise<Employee[]>;
}
