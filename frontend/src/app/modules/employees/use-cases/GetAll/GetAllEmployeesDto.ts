import { AppError } from "@/app/core/base/AppError";
import { Either } from "@/app/core/base/Either";
import { Result } from "@/app/core/base/Result";

export namespace GetAllEmployeeDto {

    export interface Request { }

    export interface Employee {
        id: number;
        name: string;
        job: string;
        admission_date: string;
        phone: string;
        image: string;
    }
    export interface ResponseBody {
        employees: Array<Employee>;
    }

    export type Response = Either<
        AppError.UnexpectedError | AppError.DataNotFound,
        Result<ResponseBody>
    >;
}