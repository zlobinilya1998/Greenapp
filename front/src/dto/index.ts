export interface LoginDto {
    email: string;
    password: string
}
export interface RegisterDto {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface TaskCreateDto {
    title: string;
    description: string
}

export interface TokenCreateDto {
    address: string;
}
