export type ResponeApiType<T = any> = {
  data: T;
  message: string;
  success: boolean
};
