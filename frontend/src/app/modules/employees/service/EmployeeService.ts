import { HttpAdapter } from '@/app/core/adapter/HttpAdapter';
import { EmployeeDto } from './EmployeeDto';

type Response<T> = { data: T };

export interface IEmployeeService {
    getAllEmployees(): Promise<EmployeeDto.GetAllEmployees.Response>;
}

export class EmployeeService implements IEmployeeService {
    private httpAdapter: HttpAdapter;

    constructor(httpAdapter: HttpAdapter) {
        this.httpAdapter = httpAdapter;
    }

    async getAllEmployees(): Promise<EmployeeDto.GetAllEmployees.Response> {
        const url = `${process.env.API_URL}/house_rules`;

        const res: Response<EmployeeDto.GetAllEmployees.Response> =
            await this.httpAdapter.get({
                url,
            });


        return res.data;
    }
}