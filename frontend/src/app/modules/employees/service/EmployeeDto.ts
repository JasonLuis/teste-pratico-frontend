export namespace EmployeeDto {

    export namespace GetAllEmployees {
        export interface Response extends Array<{
            id: number;
            name: string;
            job: string;
            admission_date: string;
            phone: string;
            image: string;
        }> {}
    }
}