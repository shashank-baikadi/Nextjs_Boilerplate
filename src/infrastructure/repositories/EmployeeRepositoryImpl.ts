import { EmployeeRepository } from '../../domain/repositories/EmployeeRepository';
import { Employee } from '../../domain/entities/Employee';
import { httpClient } from '../api/httpClient';

export class EmployeeRepositoryImpl implements EmployeeRepository {
  async getAll(): Promise<Employee[]> {
    const response = await httpClient.get<Employee[]>('employees');
    return response.data;
  }
}