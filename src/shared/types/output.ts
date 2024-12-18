export interface IOutputResultSuccess {
  status: 'success';
  output: string;
}

export interface IOutputResultError {
  status: 'error';
  error: string;
}

export type IOutputResult = IOutputResultSuccess | IOutputResultError;
