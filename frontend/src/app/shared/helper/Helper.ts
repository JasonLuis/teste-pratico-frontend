export class Helper {
    static PhoneMask(phone: string): string {
        return phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');
    }

    static DateMask(date: string): string {
        const value = new Date(date);
        const formattedDate = value.toLocaleDateString('pt-BR');
        return formattedDate;
    }
}