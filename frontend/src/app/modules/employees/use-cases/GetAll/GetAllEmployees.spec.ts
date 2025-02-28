import { employeeUseCase } from ".";

describe('Use Case: Employees/GetAllEmployees', () => {

    test('GetAllEmployees - Success', async () => {
        // Arrange
        const req = {};
        const expected =
        {
            id: 1,
            name: "João",
            job: "Back-end",
            admission_date: "2019-12-02T00:00:00.000Z",
            phone: "5551234567890",
            image: "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
        };

        // Act
        const res = await employeeUseCase.execute(req);
        
        // Assert
        expect(res.isRight()).toBe(true);
        if(res.isRight()) {
            const value = res.value.getValue();
            expect(Number(value.employees[0].id)).toEqual(expected.id);
            expect(value.employees[0].name).toEqual(expected.name);
            expect(value.employees[0].admission_date).toEqual(expected.admission_date);
            expect(value.employees[0].phone).toEqual(expected.phone);
            expect(value.employees[0].image).toEqual(expected.image);
        }
    });
});