export interface IApiResponse<T> extends ApiResponse {
    data: any;
    content?: T;
  }
  
  interface ApiResponse {
    isSuccess: boolean;
    errors?: IError;
  }
  
  export interface Error {
    timestamp: number;
    key: string;
    message: string;
    class: string;
    data?: any;
  }
  export interface IError {
    error: Error;
  }