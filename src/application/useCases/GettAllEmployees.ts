import { Employee } from '../../domain/entities/Employee';
import { EmployeeRepository } from '../../domain/repositories/EmployeeRepository';

export class GetAllEmployees {
  constructor(private employeeRepository: EmployeeRepository) {}

  async execute(): Promise<Employee[]> {
    return await this.employeeRepository.getAll();
  }
}