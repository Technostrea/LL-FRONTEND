import { PropertyEnum } from './property-enum.js';

export type PropertyType = {
  id?: number;
  title: string;
  user_id: number;
  price: string;
  property_type: PropertyEnum;
  city: string;
  imageUrl: string;
};
