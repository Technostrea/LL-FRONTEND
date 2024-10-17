import {PropertyEnum} from './property-enum.js';

export type PropertyType = {
  id?: number;
  user_id?: number;
  title: string;
  description: string;
  price: string;
  area: string;
  status: 'rented' | 'available' | 'sold'
  property_type: PropertyEnum;
  address: string;
  city: string;
  state: string;
  zip: string;
  latitude: string;
  longitude: string;
  images_url: ImagesUrlType[];
  created_at: string;
  favorites_count: number;
};

type ImagesUrlType = {
  id?: number;
  image_url: string;
}
