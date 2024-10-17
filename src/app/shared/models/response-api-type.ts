import {PaginationType} from "@app/shared/models/pagination-type";

export type ResponseApiType<T = any> = {
  data: T;
  message: string;
  success: boolean;
  pagination?:PaginationType
};
