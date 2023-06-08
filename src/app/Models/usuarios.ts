export interface Usuarios {
    id?: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address?: object,
    company?:object,
    geo?: object
}
