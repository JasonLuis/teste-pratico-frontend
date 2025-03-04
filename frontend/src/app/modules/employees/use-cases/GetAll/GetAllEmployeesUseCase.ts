import { UseCase } from "@/app/core/base/UseCase";
import { GetAllEmployeeDto } from "./GetAllEmployeesDto";
import { IEmployeeService } from "../../service/EmployeeService";
import { left, right } from "@/app/core/base/Either";
import { Result } from "@/app/core/base/Result";
import { HttpHelper } from "@/app/shared/helper/HttpHelper";
import { AppError } from "@/app/core/base/AppError";
import { CallError } from "@/app/shared/types/ErrorType";
import { Helper } from "@/app/shared/helper/Helper";

export class GetAllEmployeesUseCase implements UseCase<GetAllEmployeeDto.Request, GetAllEmployeeDto.Response> {
    constructor(private employeeService: IEmployeeService) {
        this.employeeService = employeeService;
    }
    public async execute(request: GetAllEmployeeDto.Request | undefined):  Promise<GetAllEmployeeDto.Response> {

        try {
            const call = await this.employeeService.getAllEmployees();
            const res = {
                employees: call.map((employee) => ({
                    id: employee.id,
                    name: employee.name,
                    job: employee.job,
                    admission_date: Helper.DateMask(employee.admission_date),
                    phone: Helper.PhoneMask(employee.phone),
                    image: employee.image,
                })),
            }

            return right(Result.ok(res));
        } catch (error) {
            if (HttpHelper.isDataNotFoundError(error as CallError)) {
                return left(new AppError.DataNotFound(error));
              }
              return left(new AppError.UnexpectedError(error));
        }
    }

}