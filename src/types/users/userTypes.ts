export interface IUser {
    id: string;
    name: string;
    email: string;
    role: number;
    createdAt: string;
    updatedAt: string;
}

export interface IUserRequest {
    email: string;
    password: string;
}

export interface IUserResponse {
    error: boolean;
    data: {
        id: string;
        name: string;
        email: string;
        role: number;
        createdAt: string;
        updatedAt: string;
    };
}
