import { AppError } from "@/app/core/base/AppError";
import { Either } from "@/app/core/base/Either";
import { Result } from "@/app/core/base/Result";
import { EmployeeDto } from "@/app/modules/employees/service/EmployeeDto";

export namespace GetAllEmployeeDto {

    export interface Request { }
    export interface ResponseBody {
        employees: EmployeeDto.GetAllEmployees.Response
    }

    export type Response = Either<
        AppError.UnexpectedError | AppError.DataNotFound,
        Result<ResponseBody>
    >;
}