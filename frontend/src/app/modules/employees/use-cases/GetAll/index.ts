import { HttpAdapter } from "@/app/core/adapter/HttpAdapter";
import { EmployeeService } from "@/app/modules/employees/service/EmployeeService";
import { GetAllEmployeesUseCase } from "./GetAllEmployeesUseCase";

const httpAdapter = new HttpAdapter();

const employeeService = new EmployeeService(httpAdapter);

export const employeeUseCase = new GetAllEmployeesUseCase(employeeService);

