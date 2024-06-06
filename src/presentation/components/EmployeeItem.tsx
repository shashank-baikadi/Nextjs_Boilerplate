// src/app/components/EmployeeItem.tsx
import { Employee } from '@/domain/entities/Employee';

interface EmployeeItemProps {
  employee: Employee;
}

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee }) => (
    <div>
  <li>{employee.name} - {employee.department}</li>


{employee.email}
  </div>
);

export default EmployeeItem;
