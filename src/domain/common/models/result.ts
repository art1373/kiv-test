export interface Result<T> {
  data?: T;
  status: number;
  errorMessage: string;
}
