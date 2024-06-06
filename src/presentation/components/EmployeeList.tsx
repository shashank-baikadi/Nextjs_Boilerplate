// src/app/components/EmployeeList.tsx
import { Employee } from '@/domain/entities/Employee';
import EmployeeItem from './EmployeeItem';

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => (
  <ul>
    {employees.map(emp => (
      <EmployeeItem key={emp.id} employee={emp} />
    ))}
  </ul>
);

export default EmployeeList;
