// import { GetServerSideProps } from 'next';
// import { Employee } from '../../domain/entities/Employee';
// import { GetAllEmployees } from '../../application/useCases/GettAllEmployees';

// import { EmployeeRepositoryImpl } from '../../infrastructure/repositories/EmployeeRepositoryImpl';
// interface EmployeesPageProps {
//   employees: Employee[];
// }

// const EmployeesPage: React.FC<EmployeesPageProps> = ({ employees }) => (
//   <div>
//     <h1>Employees</h1>
//     <ul>
//       {employees.map(emp => (
//         <li key={emp.id}>{emp.name} - {emp.department}</li>
//       ))}
//     </ul>
//   </div>
// );

// export const getServerSideProps: GetServerSideProps = async () => {
//   const repository = new EmployeeRepositoryImpl();
//   const useCase = new GetAllEmployees(repository);
//   const employees = await useCase.execute();

//   return { props: { employees } };
// };

// export default EmployeesPage;