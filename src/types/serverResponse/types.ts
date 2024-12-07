export interface IServerResponse<T = void> {
    data: T;
    statusCode: number;
    message: string;
}

export interface IErrorResponse {
    response: {
        data: {
            code: string;
            error: boolean;
            message: string;
        };
        status: number;
        statusText: string;
    };
}
